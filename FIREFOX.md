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

## ✅ **PARTIALLY COMPLETED SOLUTION: Firefox Extension Authentication Bridge**

🎉 **PARTIAL SUCCESS!** We've successfully implemented a Firefox-compatible bridge that **enables working WeChat authentication** via **context menu** on ima.qq.com by using **external script injection** with **chrome.runtime.sendMessage** detection to bypass both Firefox's context isolation and Content Security Policy restrictions.

⚠️ **REMAINING ISSUE**: Extension button authentication still fails in Firefox with "終端接口空響應" (Terminal interface empty response) errors, while context menu authentication works perfectly.

### **Root Cause Analysis**

**Problem 1**: Firefox's strict context isolation prevents content scripts from injecting objects into the webpage's global context that the webpage can access.

**Problem 2**: Firefox blocks inline script execution due to Content Security Policy violations:
```
Refused to execute inline script because it violates CSP … "script-src 'self' …"
```

**Problem 3**: ⚡ **CRITICAL DISCOVERY** - The IMA system checks for `chrome.runtime.sendMessage` to detect extension context:
```javascript
// Extension context detection logic
if (chrome?.runtime?.sendMessage) {
  // Proceed with extension API calls
} else {
  this.logger.error("不再插件内", "MockNativePromiseInWebIFrame")
  // Returns: { code: 995, msg: "不再插件内", data: null }
}
```

**Evidence from logs:**
```javascript
[DEBUG] callNativePromise: globalThis.chrome.imaFrame exists: false
[DEBUG] callNativePromise: globalThis.chrome.imaFrame.invokeWithCallback exists: false  
[MockNativePromiseInWebIFrame] 不再插件内 (Not in plugin)
终端接口空响应 (Terminal interface empty response)
```

### **Solution Architecture**

**Previous (Broken) Inline Script Approach:**
```
Content Script → Inline <script> with textContent
     ↑ CSP BLOCKS THIS ↑
Webpage Context: chrome.imaFrame → undefined
```

**New (Working) External Script Injection with Runtime Detection:**
```
1. Content script loads external script via chrome.runtime.getURL()
2. External script runs in webpage context (CSP-exempt for extension resources)
3. Creates chrome.imaFrame API + chrome.runtime.sendMessage mock ← KEY FIX
4. Extension context detection passes: chrome.runtime.sendMessage exists ✅
5. Uses window.postMessage for content script ↔ webpage communication
6. Content script forwards ALL messages to background script handlers
```

### **Implementation Details**

#### Files Modified:
- **`assets/ima-bridge.js`** - Updated to use external script loading instead of inline script
- **`assets/page-bridge.js`** - New external script file containing the webpage API injection code
- **`manifest.json`** - Added web_accessible_resources for page-bridge.js

#### How It Works:

1. **External Script Loading**: Content script uses `chrome.runtime.getURL('assets/page-bridge.js')` to load the external script
2. **CSP Compliance**: Extension resources (moz-extension://) are exempt from page CSP restrictions
3. **Complete API Creation**: The external script creates:
   - `chrome.imaFrame.invoke()` and `chrome.imaFrame.invokeWithCallback()` functions
   - **`chrome.runtime.sendMessage()`** ← **Critical for extension detection**
4. **Extension Context Detection**: IMA system detects `chrome.runtime.sendMessage` and proceeds with authentication
5. **Dual Message Bridge**: Uses `window.postMessage()` for:
   - `IMA_BRIDGE_*` messages → chrome.imaFrame calls  
   - `IMA_RUNTIME_MESSAGE` → chrome.runtime.sendMessage calls
6. **Background Forwarding**: Content script forwards ALL messages to background script handlers

#### Supported Actions:
- **`getAccountInfo`** → Returns user authentication data
- **`getDeviceInfo`** → Returns device/browser identifiers  
- **`login`** → Triggers extension login flow
- **`log`** → Acknowledges logging requests

### **Key Features:**

✅ **Firefox Compatible** - Bypasses context isolation using external script injection  
✅ **CSP Compliant** - Uses extension resources which are exempt from page CSP
✅ **Chrome Compatible** - Works alongside existing `externally_connectable` support  
✅ **Automatic Injection** - Bridge loads on all `*.ima.qq.com` domains  
✅ **Error Handling** - Fallback values when extension functions fail  
✅ **Debug Logging** - Comprehensive console output for troubleshooting  
✅ **Secure Communication** - Proper message validation and response handling

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
  "web_accessible_resources": [
    {
      "matches": ["*://*.ima.qq.com/*"],
      "resources": ["assets/page-bridge.js"],
      "use_dynamic_url": false
    }
  ],
  "externally_connectable": {
    "ids": ["*"],
    "matches": ["*://*.qq.com/*"]
  }
}
```

### **Results: ✅ PARTIAL SUCCESS!**

- ✅ `chrome.imaFrame` API available to webpage in Firefox
- ✅ `chrome.runtime.sendMessage` API available for extension context detection  
- ✅ No CSP violations or script execution blocks
- ✅ **Context menu authentication flow completes successfully in Firefox!** 🎉
- ✅ Account/device info retrieved without errors via context menu
- ⚠️ **Extension button still shows "终端接口空响应" (Terminal interface empty response) errors**
- ✅ No more "MockNativePromiseInWebIFrame 不再插件内" errors in context menu flow
- ✅ WeChat QR code login works in Firefox **via context menu**
- ⚠️ **Extension button authentication fails in Firefox** (works in Chrome)

### **Live Firefox Test Results:**

**Before Fix:**
```javascript
[MockNativePromiseInWebIFrame] 不再插件内 (Not in plugin)
终端接口空响应 (Terminal interface empty response)
```

**After Fix (Context Menu - Working):**
```javascript
[IMA Bridge] Runtime sendMessage called: extensionId {action: "verifyWxCode", params: "..."}
[Login] 用户扫码登录回包: {...successful login data...} 
🎉 Firefox context menu login successful!
```

**Extension Button (Still Failing):**
```javascript
[DEBUG] GetAccountInfo: browser.storage available: true
[DEBUG] GetAccountInfo: chrome.storage available: true
[DEBUG] GetAccountInfo: browser.storage result: {}
终端接口空响应 (Terminal interface empty response)
[initLogger] -> accountInfo, deviceInfo: null null
```

**Comparison with Chrome Extension Button (Working):**
```javascript
[DEBUG] vM: Extension ID: oainkjkemlglfophnnimbahggmfjfdhk
[DEBUG] vM: Generated client info: {"extId":"oainkjkemlglfophnnimbahggmfjfdhk",...}
[IMA Bridge] Runtime sendMessage called: oainkjkemlglfophnnimbahggmfjfdhk {action: 'closeLoginDialog'}
```

This external script injection approach with `chrome.runtime.sendMessage` mock successfully resolves the major context isolation issues:
1. ✅ Firefox's context isolation limitations **for context menu**
2. ✅ CSP restrictions  
3. ✅ Extension context detection requirements **for context menu**
4. ⚠️ **Extension button API response handling still needs investigation**

**Current Status: Firefox WeChat authentication works via context menu, extension button needs additional fixes!** 🚀
