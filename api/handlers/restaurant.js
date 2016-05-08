var Restaurant = require('./../model/restaurant.js');

module.exports = {
    post: function (req, reply) {
        var myRestaurant = new Restaurant(req.payload);

        myRestaurant.save(function () {
            console.log(myRestaurant);
            reply('OK');
        });
    },

    get: function (req, reply) {
        Restaurant.find().exec(function (error, data) {
            const language = 'en';

            data = data.map(function (restaurant) {
                return {
                    name: restaurant.name.filter((translatedName) => {
                        if (translatedName.language === language) return true;
                    }).map((translatedRestaurant) => { return translatedRestaurant.value; })
                }
            });

            const response = reply(data);

            response.type('application/json');
            response.header('Access-Control-Allow-Origin', '*');
        });
    }
};