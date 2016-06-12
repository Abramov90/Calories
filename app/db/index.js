var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.get("database:URI"), config.get("database:settings"));

module.exports = mongoose;