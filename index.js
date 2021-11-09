const express = require('express');

const api = express();
const data = require('./dummy')

const HOST = 'localhost';
const PORT = 8888;



api.get('/', (req, res) => {
    res.send('Kasper API test')
});

api.get('/skaters', (req, res) => {
    res.status(200).json(data);
})

api.listen(PORT, () => `running at ${HOST}:${PORT}`)