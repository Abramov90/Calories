var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./app/config');
var bodyParser = require('body-parser');

var log = require('./logs')(module);

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

require('./app/authentication/passport')(app);
require('./app/header')(app);
require('./routes')(app);

app.listen(config.get('port'), function () {
    log.info('Server has been started on port ' + config.get('port'));
});

module.exports = app;