⚠️ No, Firefox does not support externally_connectable in the manifest.json.

⸻

📘 What is externally_connectable?

In Chrome, this is used to allow web pages or other extensions to send messages to your extension:

"externally_connectable": {
  "matches": ["https://example.com/*"]
}

This allows:

// from a webpage
chrome.runtime.sendMessage(extensionId, { foo: "bar" });


⸻

❌ In Firefox?
	•	The externally_connectable manifest key is not supported at all.
	•	Firefox blocks webpages from connecting directly to extensions using runtime.sendMessage().

⸻

✅ What Firefox supports instead

Capability	Supported in Firefox?	Alternatives
One extension messaging another	✅ Yes	via runtime.connect() / sendMessage() using extensionId
Content script ↔ background	✅ Yes	Use chrome.runtime.sendMessage() from a content script injected into the page
Webpage ↔ extension	❌ No direct support	Use content scripts as bridges, or setup a window.postMessage proxy


⸻

🛠 Workaround: Webpage ↔ Content Script ↔ Background
	1.	Inject a content script into the page.
	2.	From the webpage, use window.postMessage() to talk to the content script.
	3.	The content script forwards the message to the background via chrome.runtime.sendMessage().

Content script:

window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type === "FROM_PAGE") {
    chrome.runtime.sendMessage({ type: "FORWARD", payload: event.data.payload });
  }
});

Webpage:

window.postMessage({ type: "FROM_PAGE", payload: "hello" }, "*");

⸻

## ✅ **IMPLEMENTED SOLUTION**

We've implemented a complete Firefox-compatible bridge for the IMA extension that solves the `callNative` API issues on ima.qq.com:

### **Files Added/Modified:**

1. **`assets/ima-bridge.js`** - Content script bridge
2. **`assets/index.ts.js`** - Background script message handlers  
3. **`manifest.json`** - Content script injection configuration

### **How the Bridge Works:**

The webpage at `ima.qq.com` expects to call:
```javascript
// Synchronous calls
chrome.imaFrame.invoke({ action: "getAccountInfo" });

// Asynchronous calls  
chrome.imaFrame.invokeWithCallback({ action: "getDeviceInfo" }, callback);
```

**Our bridge provides:**
1. **`chrome.imaFrame.invoke()`** - Forwards sync calls to background script
2. **`chrome.imaFrame.invokeWithCallback()`** - Handles async calls with callbacks
3. **Action handlers** for `getAccountInfo`, `getDeviceInfo`, `login`, and `log`

### **Architecture:**

```
ima.qq.com webpage
      ↓ calls chrome.imaFrame.invoke*()
assets/ima-bridge.js (content script)
      ↓ chrome.runtime.sendMessage() 
assets/index.ts.js (background script)
      ↓ processes getAccountInfo/getDeviceInfo/login
Extension's internal services (Xt.getAccountInfo(), Kt(), etc.)
```

### **Supported Actions:**

- **`getAccountInfo`** → Returns user authentication data
- **`getDeviceInfo`** → Returns device/browser identifiers  
- **`login`** → Triggers extension login flow
- **`log`** → Acknowledges logging requests

### **Key Features:**

✅ **Firefox Compatible** - No `externally_connectable` dependency  
✅ **Chrome Compatible** - `externally_connectable` preserved for Chrome login  
✅ **Automatic Injection** - Bridge loads on all `*.ima.qq.com` domains  
✅ **Error Handling** - Fallback values when extension functions fail  
✅ **Debug Logging** - Comprehensive console output for troubleshooting

### **Manifest Configuration:**

```json
{
  "content_scripts": [
    {
      "js": ["assets/ima-bridge.js"],
      "matches": ["*://*.ima.qq.com/*"],
      "run_at": "document_start",
      "all_frames": true
    }
  ],
  "externally_connectable": {
    "ids": ["*"],
    "matches": ["*://*.qq.com/*"]
  }
}
```

This solution resolves the "终端接口空响应" (Terminal interface empty response) errors seen in Firefox debugging logs by providing the expected `callNative` bridge functionality.
