//const { application } = require('express');
const express = require('express');
const knex = require("../sqlconfig.js");


const app = express();

const HOST = 'localhost';
const PORT = 8888;
const SQLPORT = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Kasper API test');
});

app.get("/api/allSkaters", (req, res) => {
    knex("skaters").then((skaters) => res.json(skaters));
});

app.post("/api/addSkater", async (req, res) => {
    if (req.body.skater) {
        knex("skaters")
            .insert({
                name: req.body.name,
                tick: req.body.trick
            })
            .returning("*")
            .then((skater) => res.json(skater));
    }
});





module.exports = app;