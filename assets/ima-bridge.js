// Firefox-compatible bridge for ima.qq.com callNative functionality
// This script bridges the gap between ima.qq.com webpage and the extension

(function() {
  'use strict';
  
  console.log('[IMA Bridge] Initializing Firefox-compatible bridge for ima.qq.com');
  
  // Check if we're on ima.qq.com domain
  if (!window.location.hostname.includes('ima.qq.com')) {
    return;
  }
  
  // Create the chrome.imaFrame bridge that the webpage expects
  if (!window.chrome) {
    window.chrome = {};
  }
  
  if (!window.chrome.imaFrame) {
    window.chrome.imaFrame = {};
  }
  
  // Synchronous invoke method (for Tp function)
  window.chrome.imaFrame.invoke = function(params) {
    console.log('[IMA Bridge] Sync invoke called:', params);
    
    // Send message to extension background script
    try {
      chrome.runtime.sendMessage(params, function(response) {
        console.log('[IMA Bridge] Sync invoke response:', response);
      });
    } catch (error) {
      console.error('[IMA Bridge] Error in sync invoke:', error);
    }
  };
  
  // Asynchronous invoke with callback (for eL function)
  window.chrome.imaFrame.invokeWithCallback = function(params, callback) {
    console.log('[IMA Bridge] Async invoke called:', params);
    
    // Handle specific actions that the webpage needs
    const { action } = params;
    
    switch (action) {
      case 'getAccountInfo':
        handleGetAccountInfo(callback);
        break;
      case 'getDeviceInfo':
        handleGetDeviceInfo(callback);
        break;
      case 'login':
        handleLogin(params, callback);
        break;
      case 'log':
        handleLog(params, callback);
        break;
      default:
        // Forward other actions to background script
        chrome.runtime.sendMessage(params, function(response) {
          console.log('[IMA Bridge] Default action response:', response);
          if (callback) {
            callback(response || { code: 0, msg: "OK", data: null });
          }
        });
    }
  };
  
  function handleGetAccountInfo(callback) {
    console.log('[IMA Bridge] Handling getAccountInfo');
    
    // Request account info from background script
    chrome.runtime.sendMessage({ action: 'getAccountInfo' }, function(response) {
      console.log('[IMA Bridge] getAccountInfo response:', response);
      
      let accountData = {
        code: 0,
        idType: "",
        isNewer: false,
        refreshToken: "",
        refreshTokenValidTime: "",
        token: "",
        tokenType: 14,
        tokenValidTime: "",
        userId: ""
      };
      
      if (response && response.userId) {
        accountData = {
          code: 0,
          idType: response.idType || "",
          isNewer: false,
          refreshToken: response.refreshToken || "",
          refreshTokenValidTime: response.refreshTokenValidTime || "",
          token: response.token || "",
          tokenType: response.tokenType || 14,
          tokenValidTime: response.tokenValidTime || "",
          userId: response.userId || ""
        };
      }
      
      const result = {
        data: JSON.stringify(accountData),
        code: 0,
        msg: ""
      };
      
      console.log('[IMA Bridge] getAccountInfo final result:', result);
      if (callback) callback(result);
    });
  }
  
  function handleGetDeviceInfo(callback) {
    console.log('[IMA Bridge] Handling getDeviceInfo');
    
    // Request device info from background script
    chrome.runtime.sendMessage({ action: 'getDeviceInfo' }, function(response) {
      console.log('[IMA Bridge] getDeviceInfo response:', response);
      
      // Generate device info similar to the extension's internal format
      const deviceData = response || {
        guid: generateGuid(),
        qimei36: generateQimei36(),
        qua: navigator.userAgent,
        extId: chrome.runtime.id,
        platform: 4, // Firefox platform
        deviceId: generateDeviceId()
      };
      
      const result = {
        data: JSON.stringify(deviceData),
        code: 0,
        msg: ""
      };
      
      console.log('[IMA Bridge] getDeviceInfo final result:', result);
      if (callback) callback(result);
    });
  }
  
  function handleLogin(params, callback) {
    console.log('[IMA Bridge] Handling login:', params);
    
    // Forward login request to background script
    chrome.runtime.sendMessage({
      action: 'login',
      params: params.params
    }, function(response) {
      console.log('[IMA Bridge] login response:', response);
      
      const result = response || {
        code: 0,
        msg: "Login request processed",
        data: null
      };
      
      if (callback) callback(result);
    });
  }
  
  function handleLog(params, callback) {
    console.log('[IMA Bridge] Handling log:', params);
    
    // Just acknowledge log messages
    if (callback) {
      callback({
        code: 0,
        msg: "Log received",
        data: null
      });
    }
  }
  
  // Utility functions for generating device identifiers
  function generateGuid() {
    return 'k' + Math.random().toString(36).substr(2, 31);
  }
  
  function generateQimei36() {
    return 'c' + Math.random().toString(36).substr(2, 31);
  }
  
  function generateDeviceId() {
    return 'c' + Math.random().toString(36).substr(2, 31);
  }
  
  // Listen for messages from the webpage
  window.addEventListener('message', function(event) {
    if (event.source !== window) return;
    
    if (event.data.type === 'IMA_BRIDGE_REQUEST') {
      console.log('[IMA Bridge] Received webpage message:', event.data);
      
      const { action, params } = event.data.payload;
      
      // Handle the request and post response back
      chrome.runtime.sendMessage({ action, params }, function(response) {
        window.postMessage({
          type: 'IMA_BRIDGE_RESPONSE',
          id: event.data.id,
          payload: response
        }, '*');
      });
    }
  });
  
  console.log('[IMA Bridge] Firefox-compatible bridge initialized successfully');
  
})();