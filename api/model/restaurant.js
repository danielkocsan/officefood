var mongoose = require('./../database.js');

var Restaurant = mongoose.model('Restaurant', {
    name: [
        {
            language: String,
            value: String
        }
    ]
});

module.exports = Restaurant;