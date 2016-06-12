var Calories = require('./model').Calories;
var database = require('../db');
mongoose.set('debug', true); //enable debug mode

module.exports = function (req, res) {
    global.calorie = req.body;

    var calorieModel = new database.models.Calories(req.body);
    calorieModel.save(function(result){
        res.render('main', { title: 'Add calories page', facebook: global.user });
    });
};
