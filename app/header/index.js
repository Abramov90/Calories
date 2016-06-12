module.exports = function (req, res) {
    var events = require('events');
    var eventEmitter = new events.EventEmitter();

    eventEmitter.on('header', function(){
        res.render('header', { facebook: global.user });
    });
};