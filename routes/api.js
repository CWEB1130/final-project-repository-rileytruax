var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
    request({
        uri: 'http://www.omdbapi.com/?i=tt3896198&apikay=5c9a0845',
        qs: {
            api_key: '5c9a0845',
            query: ''
        },
        function(error, response, body) {
            if(!error && response.statusCode === 200) {
                console.log(body)
            }
        }
    });
});