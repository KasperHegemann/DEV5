const {
    application
} = require('express');
const express = require('express');

const app = express();

const HOST = 'localhost';
const PORT = 8888;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Kasper API test');
});


module.exports = app;