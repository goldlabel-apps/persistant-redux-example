
const functions = require('firebase-functions');

exports.logRequest = functions.https.onRequest((request, response) => {
    const output = {
        message: `no error`
    };
    console.log ('logRequest() => ', output);
    response.send(`Output => ${output}`);
});
