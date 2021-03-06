/**
 * Created by Nomad_Mystic on 8/5/2016.
 */



var getURLPromise = (url) => {
    // Return a new promise.
    return new Promise((resolve, reject) => {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onLoad = () => {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onError = () => {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
};


module.exports = getURLPromise;