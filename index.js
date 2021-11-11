const {
    application
} = require('express');
const express = require('express');

const api = express();
const data = require('./dummy');

const HOST = 'localhost';
const PORT = 8888;

api.use(express.json());



api.get('/', (req, res) => {
    res.send('Kasper API test');
});

api.get('/skaters', (req, res) => {
    res.status(200).json(data);
});




api.listen(PORT, () => {
    console.log(`running at ${HOST}:${PORT}`);
});