'use strict';

const Hapi  = require('hapi');
const db    = low('db.json');

const server = new Hapi.Server();
server.connection({ port: 9091 });

server.route({
    method: 'POST',
    path: '/',
    handler: function(request, reply) {

    }
});

server.start((err) => {

    if (err) {
        throw err;
    } else {
        console.log(`Server running at: ${server.info.uri}`);
    }
    
});