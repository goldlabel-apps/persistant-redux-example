
const functions = require('firebase-functions');

exports.logRequest = functions.https.onRequest((request, response) => {
    console.log ('request', request);
    response.send("request logged");
});
