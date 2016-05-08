var schema = require('./../database.js');

var User = schema.define('User', {
    email:     { type: schema.String, "null": false, unique: true },
    name:      { type: schema.String, "null": false, limit: 255, index: true },
    content:   { type: schema.Text },
    params:    { type: schema.JSON },
    date:      { type: schema.Date,   default: Date.now },
});

module.exports = User;