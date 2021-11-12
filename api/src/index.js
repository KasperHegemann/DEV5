const {
    application
} = require('express');
const express = require('express');

const api = express();

const HOST = 'localhost';
const PORT = 8888;

api.use(express.json());


api.get('/', (req, res) => {
    res.send('Kasper API test');
});


module.exports = api;