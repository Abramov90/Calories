var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    require('./../app/authentication')(req, res);
});

module.exports = router;
