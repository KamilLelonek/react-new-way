/**
 * Simple wrapper over XMLHttpRequest that returns a Promise representing
 * the result of making a JSON POST request.
 *
 * @param  {String} url         the request url
 * @param  {Object} requestData the JSON data to send as the request body
 * @param  {String} method      HTTP method that request should be opened with
 * @return {Promise}            resolves or rejects according to the response
 */
let generalRequest = (url, requestData, method) => {
  let requestCompleted = 4;
  let request          = new XMLHttpRequest();
  let baseUrl          = environment.HOST;

  if (!request) {
    throw new Error('Could not initialize XMLHttpRequest object!');
  }

  let promise = new Promise((resolve, reject) => {
    request.onreadystatechange = () => {
      if (request.readyState === requestCompleted) {
        let responseObject = request.responseText ? JSON.parse(request.responseText) : "";

        if (request.status.toString().match("20*").length > 0) {
          resolve(responseObject);
        } else {
          reject(responseObject.table.errors);
        }
      }
    }
  });

  request.open(method, baseUrl+url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(requestData));

  return promise;
};

export let getData  = (url, requestData) => generalRequest(url, requestData, 'GET' );
export let postData = (url, requestData) => generalRequest(url, requestData, 'POST');
