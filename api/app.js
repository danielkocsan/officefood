var Hapi = require('hapi'),
    Swaggerize = require('swaggerize-hapi'),
    Path = require('path');

var server = new Hapi.Server();

server.connection({ port: 8282 });

server.register({
    register: Swaggerize,
    options: {
        api: require('./config/test.json'),
        handlers: Path.join(__dirname, './handlers')
    }
});

server.start(function (err) {
    if (err) {
        throw err;
    }

    console.log('hapi server started');
});