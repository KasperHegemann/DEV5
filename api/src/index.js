//const { application } = require('express');
const express = require('express');
const knex = require("./sqlconfig");


const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Kasper API test');
});

app.get("/api/allSkaters", (req, res) => {
    //   knex("skaters").then((skaters) => res.json(skaters));
    knex.select().from("skaters").then(data => {
        return res.json(data);
    })

});

app.post("/api/addSkater", async (req, res) => {
    if (req.body.skater) {
        knex("skaters")
            .insert({
                name: req.body.name,
                tick: req.body.trick
            })

            .then((skater) => res.json(skater));
    }
});





module.exports = app;