var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/users.js');

router.post('/', function(req, res, next) {

    user.username = req.body.username;
    user.password = req.body.password;

    console.log(user);
    
    let userData = fs.readFileSync('./model/users.json');
    
    let siteUser = JSON.parse(userData);

    siteUser.push(user);

    const usersString = JSON.stringify(siteUser)
        fs.writeFile('./model/users.json', usersString, err => {
            if(err){
                console.log('Error writing file', err)
            }else{
                console.log('Successfully wrote file')
            }
        })
        res.render('search', user);
});

module.exports = router;