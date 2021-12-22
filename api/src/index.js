//const { application } = require('express');
const express = require('express');
const knex = require("./sqlconfig");


const app = express();


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