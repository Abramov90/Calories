module.exports = function (app) {
    var passport = require('passport');
    var FacebookStrategy = require('passport-facebook').Strategy;
    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    var config = require('../config');

    passport.use(new FacebookStrategy({
            clientID: config.get('appID'),
            clientSecret: config.get('appSecret'),
            callbackURL: config.get('appURI') + ':' + config.get('port') + '/login/facebook/return'
        },
        function(accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }));

    passport.serializeUser(function(user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function(obj, cb) {
        cb(null, obj);
    });

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/login/facebook', passport.authenticate('facebook'));
    app.get('/login/facebook/return', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
        req.session.token = req.query.code;
        global.user = req.user;
        eventEmitter.emit('header');
        res.redirect('/main/');
    });
};