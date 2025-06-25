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
