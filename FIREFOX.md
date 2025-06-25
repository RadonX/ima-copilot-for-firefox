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

## 🚨 **CRITICAL UPDATE: Current Implementation Status**

### ❌ **Issue Identified: Context Isolation Failure**

**Problem**: The current `ima-bridge.js` content script approach **fails in Firefox** due to strict context isolation.

**Evidence from logs:**
```javascript
[DEBUG] callNativePromise: globalThis.chrome.imaFrame exists: false
[DEBUG] callNativePromise: globalThis.chrome.imaFrame.invokeWithCallback exists: false  
终端接口空响应 (Terminal interface empty response)
```

**Root Cause**: Firefox prevents content scripts from injecting objects into the webpage's global context that the webpage can access.

### 🔧 **Solution Plan: DOM Script Injection**

**Current (Broken) Architecture:**
```
Content Script Context: window.chrome.imaFrame = {} 
     ↑ ISOLATED ↑
Webpage Context: chrome.imaFrame → undefined
```

**Required (Working) Architecture:**
```
1. Content script injects <script> tag into DOM
2. Script runs in webpage context (not content script context)  
3. Creates chrome.imaFrame API webpage can access
4. Uses window.postMessage for content script ↔ webpage communication
5. Content script forwards to background script handlers
```

### 📋 **Implementation Steps**

#### Step 1: Modify `assets/ima-bridge.js`
Replace content script injection with DOM script injection:

```javascript
// Current approach (broken in Firefox)
window.chrome.imaFrame = {};

// New approach (Firefox compatible)
const script = document.createElement('script');
script.textContent = `
  // This runs in webpage context, not content script context
  if (!window.chrome) window.chrome = {};
  if (!window.chrome.imaFrame) {
    window.chrome.imaFrame = {
      invoke: function(params) {
        window.postMessage({
          type: 'IMA_BRIDGE_SYNC',
          payload: params
        }, '*');
      },
      invokeWithCallback: function(params, callback) {
        const id = 'ima_' + Date.now() + '_' + Math.random();
        window.addEventListener('message', function handler(event) {
          if (event.data.type === 'IMA_BRIDGE_RESPONSE' && event.data.id === id) {
            window.removeEventListener('message', handler);
            callback(event.data.payload);
          }
        });
        window.postMessage({
          type: 'IMA_BRIDGE_ASYNC',
          id: id,
          payload: params
        }, '*');
      }
    };
  }
`;
document.documentElement.appendChild(script);
script.remove();
```

#### Step 2: Update Message Handling
Content script listens for postMessage and forwards to background:

```javascript
window.addEventListener('message', function(event) {
  if (event.source !== window) return;
  
  if (event.data.type === 'IMA_BRIDGE_SYNC') {
    chrome.runtime.sendMessage(event.data.payload);
  }
  
  if (event.data.type === 'IMA_BRIDGE_ASYNC') {
    chrome.runtime.sendMessage(event.data.payload, function(response) {
      window.postMessage({
        type: 'IMA_BRIDGE_RESPONSE',
        id: event.data.id,
        payload: response
      }, '*');
    });
  }
});
```

#### Step 3: Test & Verify
- **Verify**: `globalThis.chrome.imaFrame` exists in webpage console
- **Test**: Account/device info retrieval works  
- **Confirm**: No more "终端接口空响应" errors

### 🎯 **Expected Outcome**

After implementing DOM script injection:
- ✅ `chrome.imaFrame` API available to webpage
- ✅ Authentication flow completes in Firefox
- ✅ Account/device info retrieved successfully  
- ✅ No more "Terminal interface empty response" errors
- ✅ Login process works seamlessly across browsers

This approach bypasses Firefox's context isolation while maintaining security and functionality.
