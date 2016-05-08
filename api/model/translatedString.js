var mongoose = require('./../database.js');

var TranslatedString = mongoose.model('TranslatedString', {
    language: String,
    value: String
});

module.exports = TranslatedString;
