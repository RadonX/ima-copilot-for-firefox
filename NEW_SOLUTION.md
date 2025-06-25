Why the current injection fails

Firefox is stopping on the page-level Content-Security-Policy:

Refused to execute inline script because it violates CSP … “script-src 'self' …”

Your <script> element contains inline code (script.textContent = …).
script-src in the response header of ima.qq.com does not include
'unsafe-inline', a hash or a nonce, so Firefox blocks it before it can even run.
(Inline code is always treated as coming from the page’s origin, therefore the
extension’s privileges do not apply.)  ￼

⸻

Two CSP-safe ways to expose chrome.imaFrame

Option	Works in	CSP-safe?	Summary
A. Inject an external page-script	Firefox & Chrome	✅ Yes – extension URLs are exempt from the page’s CSP	Load moz-extension://…/page-bridge.js (needs web_accessible_resources).
B. Use exportFunction / cloneInto	Firefox only	✅ Yes – no script injection at all	Export your functions straight from the content script into window and skip <script> entirely.


⸻

Option A – external script injection (cross-browser)
	1.	Create page-bridge.js
Move the code that now lives in script.textContent into this file.
	2.	Mark it as web-accessible in manifest.json

"web_accessible_resources": [{
  "resources": ["page-bridge.js"],
  "matches": ["*://*.ima.qq.com/*"]
}]

Firefox ignores a page’s CSP for resources that originate from the
extension scheme (moz-extension://…).   ￼

	3.	Load the file from your content script

const pageScript = document.createElement('script');
pageScript.src = chrome.runtime.getURL('page-bridge.js');
pageScript.onload = () => pageScript.remove();
(document.head || document.documentElement).appendChild(pageScript);

That’s it: the code now runs in the page context, CSP-compliant, and your
existing window.postMessage bridge continues to work.

⸻

Option B – Firefox-only, no script tag

Firefox lets a content script export real functions into the page’s global
object while staying inside the privileged content-script compartment.

// content script (ima-bridge.js)

// 1 – make sure the objects exist in the page context
const page = window.wrappedJSObject;
if (!page.chrome) page.chrome = {};
if (!page.chrome.imaFrame) page.chrome.imaFrame = {};

// 2 – implement the bridge *inside the content script*
function invoke(params) {
  page.postMessage(
    cloneInto({type: "IMA_BRIDGE_SYNC", payload: params}, page),
    "*"
  );
  return cloneInto({code: 0, msg: "OK", data: null}, page);
}

function invokeWithCallback(params, cb) {
  const id = "ima_" + Date.now() + "_" + Math.random();
  page.addEventListener("message", function handler(e) {
    if (e.data.type === "IMA_BRIDGE_RESPONSE" && e.data.id === id) {
      page.removeEventListener("message", handler);
      cb(e.data.payload);
    }
  });
  page.postMessage(
    cloneInto({type: "IMA_BRIDGE_ASYNC", id, payload: params}, page),
    "*"
  );
}

// 3 – expose them to the page
exportFunction(invoke, page.chrome.imaFrame, {defineAs: "invoke"});
exportFunction(invokeWithCallback, page.chrome.imaFrame,
               {defineAs: "invokeWithCallback"});

APIs used: exportFunction() and cloneInto()
(MDN: Sharing objects with page scripts).  ￼

Because no <script> is injected, the page’s CSP never fires, yet the webpage
sees window.chrome.imaFrame.invoke* exactly as in Chrome.

⸻

Practical recommendations
	•	Prefer Option A if you need one codebase for Chrome and Firefox – it’s
the simplest CSP-friendly technique.
	•	Consider Option B when you want zero web-accessible scripts, or if you
worry about hostile pages re-using your script tag.
	•	Whichever route you pick, tighten message filters:

if (event.origin !== "https://ima.qq.com") return;
if (!event.data || typeof event.data !== "object") return;

This prevents other iframes or pages from poking your bridge.

Once you switch to an external script (or exportFunction), the "Refused to execute inline script" error disappears and the getAccountInfo /
getDeviceInfo calls should resolve just like they do in Chromium.
