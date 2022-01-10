export const request = (url, options) =>
  new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: 'GET',
      ...options,
      url,
      onload: function(response) {
        if (response.readyState === 4 && response.status === 200) {
          if (options.doNotParse) {
            return resolve(response.responseText);
          }
          resolve(JSON.parse(response.responseText));
        } else {
          reject(new Error(`Cannot load url ${url}`));
        }
      },
    });
  });

  export const rawRequest = (url, options) =>
  new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: 'GET',
      ...options,
      url,
      onload: function(response) {
        if (response.readyState === 4 && response.status === 200) {
          resolve(response);
        } else {
          reject(new Error(`Cannot load url ${url}`));
        }
      },
    });
  });
