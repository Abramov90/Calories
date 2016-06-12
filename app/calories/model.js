var mongoose = require("./../db");
var Schema = mongoose.Schema;

var schema = mongoose.Schema({
    product: {
        type: String,
        unique: false,
        required: true
    },
    calories: {
        type: Number,
        unique: false,
        required: true
    },
    name: {
        type: String,
        unique: false,
        required: true
    },
    date: {
        type: String,
        unique: false,
        required: true
    }
});

exports.Calories = mongoose.model('Calories', schema);