var Calories = require('./model').Calories;

module.exports = function (req, res) {
    Calories.remove({ _id: req.body.id }, function (err, product) {
        Calories.find({  }, function(err, calorie){
            res.render('profile', { title: 'Review calories page', calories: calorie, facebook: global.user });
        });
    })
};
