module.exports = function (app) {
    var authentication = require('./authentication');
    var main = require('./main');
    var profile = require("./profile");
    var logout = require('./logout');


    app.use('/', authentication);
    app.use('/logout', logout);
    app.use('/main', _isAuthenticated(), main);
    app.post('/main', _isAuthenticated(), main);
    app.use('/profile', _isAuthenticated(), profile);

    function _isAuthenticated() { 
        return function (req, res, next) {
            if (req.isAuthenticated()) {
            return next()
            }
            res.redirect('/')
        }
    };
};