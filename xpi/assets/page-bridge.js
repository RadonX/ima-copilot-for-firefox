(function() {
  console.log('[IMA Bridge] Injecting chrome.imaFrame and chrome.runtime APIs into webpage context');
  
  // Create the chrome object and its APIs that the webpage expects
  if (!window.chrome) {
    window.chrome = {};
  }
  
  if (!window.chrome.imaFrame) {
    window.chrome.imaFrame = {};
  }
  
  if (!window.chrome.runtime) {
    window.chrome.runtime = {};
  }
  
  // Synchronous invoke method (for Tp function)
  window.chrome.imaFrame.invoke = function(params) {
    console.log('[IMA Bridge] Sync invoke called:', params);
    
    window.postMessage({
      type: 'IMA_BRIDGE_SYNC',
      payload: params
    }, '*');
    
    // Return a default response for sync calls
    return { code: 0, msg: "OK", data: null };
  };
  
  // Asynchronous invoke with callback (for eL function)
  window.chrome.imaFrame.invokeWithCallback = function(params, callback) {
    console.log('[IMA Bridge] Async invoke called:', params);
    
    const id = 'ima_' + Date.now() + '_' + Math.random();
    
    // Set up response listener
    const responseHandler = function(event) {
      if (event.data.type === 'IMA_BRIDGE_RESPONSE' && event.data.id === id) {
        window.removeEventListener('message', responseHandler);
        console.log('[IMA Bridge] Received response for id:', id, event.data.payload);
        if (callback) {
          callback(event.data.payload);
        }
      }
    };
    
    window.addEventListener('message', responseHandler);
    
    // Send request
    window.postMessage({
      type: 'IMA_BRIDGE_ASYNC',
      id: id,
      payload: params
    }, '*');
  };
  
  // chrome.runtime.sendMessage method (for extension context detection)
  window.chrome.runtime.sendMessage = function(extId, message, callback) {
    console.log('[IMA Bridge] Runtime sendMessage called:', extId, message);
    
    const id = 'runtime_' + Date.now() + '_' + Math.random();
    
    // Set up response listener if callback provided
    if (callback) {
      const responseHandler = function(event) {
        if (event.data.type === 'IMA_RUNTIME_RESPONSE' && event.data.id === id) {
          window.removeEventListener('message', responseHandler);
          console.log('[IMA Bridge] Runtime response received for id:', id, event.data.payload);
          callback(event.data.payload);
        }
      };
      
      window.addEventListener('message', responseHandler);
    }
    
    // Send request to content script
    window.postMessage({
      type: 'IMA_RUNTIME_MESSAGE',
      id: id,
      extId: extId,
      payload: message
    }, '*');
  };
  
  console.log('[IMA Bridge] chrome.imaFrame and chrome.runtime APIs injected successfully');
})();