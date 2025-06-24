# IMA Extension Authentication Analysis

## Executive Summary

Investigation into Firefox extension authentication failures revealed the **root cause**: Firefox does not support the `externally_connectable` manifest feature, which prevents external WeChat login pages from sending verification codes to the extension via `chrome.runtime.sendMessage()`.

**Status**: Chrome works (has `externally_connectable` support), Firefox fails (no `externally_connectable` support).

## Authentication Architecture

### WeChat Login Flow

**Working Flow (Chrome)**:
1. User scans WeChat QR code
2. WeChat redirects to `https://ima.qq.com/universal-login/` with auth code
3. External login page calls `chrome.runtime.sendMessage(extensionId, {action: "verifyWxCode", params: {wxCode: "..."}})`
4. Extension background script receives message via `chrome.runtime.onMessageExternal`
5. Extension processes verification and stores user data to `chrome.storage.local`

**Broken Flow (Firefox)**:
1. User scans WeChat QR code
2. WeChat redirects to `https://ima.qq.com/universal-login/` with auth code  
3. External login page attempts `chrome.runtime.sendMessage()` ❌ **BLOCKED - Firefox doesn't support externally_connectable**
4. Extension never receives verification message
5. User data never stored, appears "logged out"

### Key Components

#### Background Script (`assets/pkg.js`)
- **Function**: `chrome.runtime.onMessageExternal.addListener()` - handles `verifyWxCode`
- **Storage**: `chrome.storage.local.set({userInfo: userData})` - persists login data
- **Status**: ✅ Works in both browsers

#### External Login Pages  
- **Location**: `https://ima.qq.com/universal-login/`
- **Function**: Extracts WeChat auth codes and sends to extension
- **Chrome**: ✅ Can send messages via `externally_connectable`
- **Firefox**: ❌ Cannot send messages (no `externally_connectable` support)

#### Manifest Configuration
```json
{
  "externally_connectable": {
    "ids": ["*"],
    "matches": ["*://*.qq.com/*"]
  }
}
```
- **Chrome**: Allows external pages to communicate with extension
- **Firefox**: Ignored (not supported) - [Firefox Bug 1319168](https://bugzilla.mozilla.org/show_bug.cgi?id=1319168)

## Evidence from Console Logs

### Chrome (Working)
```
index.ts.js:2571 [MSG] Background: Message received: verifyWxCode from: https://ios.sspai.com/post/55130
pkg.js:25345 [MSG] Background: External message received: verifyWxCode
pkg.js:25348 [MSG] Background: Processing verifyWxCode, code: 021gMFkl2OVBOf4Cqdml2r9uEg4gMFkv
pkg.js:25479 [DEBUG] GetAccountInfo: Storage result: {"userInfo":{...valid user data...}}
```

### Firefox (Failing)  
```
[DEBUG] GetAccountInfo: browser.storage available: false
[DEBUG] GetAccountInfo: chrome.storage available: true
[DEBUG] GetAccountInfo: chrome.storage result: {}
```

**Key Difference**: Firefox has no `verifyWxCode` messages because external pages cannot communicate with the extension.

## Technical Implementation Details

### Storage System (`pkg.js:25493-25516`)
```javascript
case Rr.GetAccountInfo: {
  // Try Firefox's native browser.storage.local API if available
  let r;
  if (globalThis.browser?.storage?.local) {
    r = await globalThis.browser.storage.local.get(sr.userInfo);
  } else {
    r = await chrome.storage.local.get(sr.userInfo);
  }
  const userInfo = (r?.[sr.userInfo]) || Mn(); // Default empty user
}
```

### WeChat Verification Handler (`pkg.js:25343-25366`)
```javascript
chrome.runtime.onMessageExternal.addListener((e, t, r) => {
  if (e?.action === "verifyWxCode") {
    hM(e?.params?.wxCode).then((s) => {
      if (s.userId && s.token) {
        chrome.storage.local.set({ [sr.userInfo]: s }); // Store login data
      }
    });
  }
});
```

### Message Routing (`pkg.js:25392-25426`)
Extension attempts to route internal messages for Firefox compatibility but this doesn't solve the external communication issue.

## Solution Options for Firefox

### Option 1: URL Monitoring
Use existing tab monitoring infrastructure to detect WeChat callback URLs:
```javascript
// Already exists in pkg.js:3259-3268
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url?.includes('ima.qq.com/universal-login') && tab.url.includes('code=')) {
    // Extract WeChat code from URL and process verification
  }
});
```

### Option 2: Content Script Injection
Inject content scripts into `*.qq.com` pages to intercept verification codes:
```javascript
// Add to manifest.json content_scripts
{
  "matches": ["*://*.qq.com/*"],
  "js": ["wechat-interceptor.js"]
}
```

### Option 3: Cross-Browser Polyfill
Use webextension-polyfill to standardize APIs, though this won't solve the `externally_connectable` limitation.

## For Future Maintenance

### Browser Compatibility Matrix
| Feature | Chrome | Firefox | Edge | Safari |
|---------|--------|---------|------|--------|
| `externally_connectable` | ✅ | ❌ | ✅ | ❌ |
| `chrome.storage.local` | ✅ | ✅ | ✅ | ❌ use `browser.*` |
| `chrome.runtime.onMessageExternal` | ✅ | ✅ | ✅ | ✅ |

### Key Files for Authentication
- `assets/pkg.js:25343` - External message listener
- `assets/pkg.js:25493` - Storage retrieval  
- `manifest.json:58` - externally_connectable config
- WeChat login flow depends on external page communication

### Debugging Authentication Issues
1. Check console for `verifyWxCode` messages
2. Verify `chrome.storage.local` contains `userInfo`
3. Confirm external pages can communicate with extension
4. Test WeChat login flow completion

## Conclusion

**Root Cause**: Firefox lacks `externally_connectable` support, preventing external WeChat login pages from sending verification codes to the extension.

**Impact**: Users can't complete WeChat authentication in Firefox, storage remains empty.

**Solution**: Implement alternative communication method (URL monitoring or content script injection) for Firefox compatibility.