// Firefox-compatible bridge for ima.qq.com callNative functionality
// This script bridges the gap between ima.qq.com webpage and the extension
// Uses DOM script injection to bypass Firefox's context isolation

(function() {
  'use strict';
  
  console.log('[IMA Bridge] Initializing Firefox-compatible bridge for ima.qq.com');
  
  // Check if we're on ima.qq.com domain
  if (!window.location.hostname.includes('ima.qq.com')) {
    return;
  }
  
  // DOM script injection using external script file (CSP-safe)
  const pageScript = document.createElement('script');
  pageScript.src = chrome.runtime.getURL('assets/page-bridge.js');
  pageScript.onload = () => pageScript.remove();
  (document.head || document.documentElement).appendChild(pageScript);
  
  console.log('[IMA Bridge] DOM script injection completed');
  
  // Content script message handlers for different actions
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
  
  // Listen for messages from the injected webpage script
  window.addEventListener('message', function(event) {
    if (event.source !== window) return;
    
    console.log('[IMA Bridge] Content script received message:', event.data);
    
    // Handle synchronous messages
    if (event.data.type === 'IMA_BRIDGE_SYNC') {
      const { action } = event.data.payload;
      console.log('[IMA Bridge] Handling sync message:', action);
      
      // Forward to background script
      chrome.runtime.sendMessage(event.data.payload, function(response) {
        console.log('[IMA Bridge] Sync message response:', response);
      });
    }
    
    // Handle asynchronous messages
    if (event.data.type === 'IMA_BRIDGE_ASYNC') {
      const { action } = event.data.payload;
      const messageId = event.data.id;
      
      console.log('[IMA Bridge] Handling async message:', action, 'id:', messageId);
      
      // Handle specific actions that need custom processing
      switch (action) {
        case 'getAccountInfo':
          handleGetAccountInfo(function(result) {
            window.postMessage({
              type: 'IMA_BRIDGE_RESPONSE',
              id: messageId,
              payload: result
            }, '*');
          });
          break;
          
        case 'getDeviceInfo':
          handleGetDeviceInfo(function(result) {
            window.postMessage({
              type: 'IMA_BRIDGE_RESPONSE',
              id: messageId,
              payload: result
            }, '*');
          });
          break;
          
        case 'login':
          handleLogin(event.data.payload.params, function(result) {
            window.postMessage({
              type: 'IMA_BRIDGE_RESPONSE',
              id: messageId,
              payload: result
            }, '*');
          });
          break;
          
        case 'log':
          handleLog(event.data.payload.params, function(result) {
            window.postMessage({
              type: 'IMA_BRIDGE_RESPONSE',
              id: messageId,
              payload: result
            }, '*');
          });
          break;
          
        default:
          // Forward other actions to background script
          chrome.runtime.sendMessage(event.data.payload, function(response) {
            window.postMessage({
              type: 'IMA_BRIDGE_RESPONSE',
              id: messageId,
              payload: response || { code: 0, msg: "OK", data: null }
            }, '*');
          });
      }
    }
  });
  
  console.log('[IMA Bridge] Firefox-compatible bridge initialized successfully');
  
})();