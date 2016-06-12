var router = require('express').Router();

router.get('/', function(req, res) {
    require('./../app/calories/getData')(req, res);
});

router.post('/', function(req, res) {
    require('./../app/calories/filter')(req, res);
});

router.delete('/', function(req, res) {
    require('./../app/calories/remove')(req, res);
});

module.exports = router;