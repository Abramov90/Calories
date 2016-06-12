var router = require('express').Router();
var passport = require('passport');

router.get('/', function (req, res) {
    require('./../app/calories/mainPage')(req, res);
});

router.post('/', function(req, res) {
    require('./../app/calories/save')(req, res);
});

module.exports = router;