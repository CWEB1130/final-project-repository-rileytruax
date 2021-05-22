var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    request({
        uri: 'http://www.omdbapi.com/?i=tt3896198&apikay=5c9a0845',
        qs: {
            api_key: '5c9a0845',
            query: 'The Dark Knight Rises'
        },
        function(error, response, body) {
            if(!error && response.statusCode === 200) {
                console.log(body)
            }
        }
    }).pipe(res);
});

module.exports = router;