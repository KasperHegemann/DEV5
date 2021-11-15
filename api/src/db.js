const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 8888,
        user: 'docker',
        password: 'docker',
        database: 'postgres'
    }
});