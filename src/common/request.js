/**
 * Simple wrapper over XMLHttpRequest that returns a Promise representing
 * the result of making a JSON POST request.
 *
 * @param  {String} url         the request url
 * @param  {Object} requestData the JSON data to send as the request body
 * @return {Promise}            resolves or rejects according to the response
 */
export let getData = function(url, requestData = {}) {
  // return new Promise(function(resolve, reject) { resolve(url); });

  let requestCompleted = 4;
  let statusSuccess    = 200;
  let request          = new XMLHttpRequest();
  let baseUrl          = "http://localhost:8080";

  if (!request) {
    throw new Error('Could not initialize XMLHttpRequest object!');
  }

  let promise = new Promise(function(resolve, reject) {
    request.onreadystatechange = function() {
      if (request.readyState === requestCompleted) {
        let responseObject = JSON.parse(request.responseText);

        if (request.status === statusSuccess) {
          resolve(responseObject);
        } else {
          reject(responseObject);
        }
      }
    }

    request.open('GET', baseUrl+url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(requestData));
  });

  return promise;
};
