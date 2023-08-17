const fastify = require('fastify');

const server = fastify({logger: true});

server
    .listen({
        port: 4000
    })
    .catch(console.error);
