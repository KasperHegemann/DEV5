require('dotenv');
const knex = require("knex")({
  client: 'pg',
  connection: process.env.pg_connection_string,
  searchPath: ["knex", "public"],
});



(async () => {
  try {
    knex.schema.hasTable('skaters').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('skaters', function (t) {

          t.string('name', 50);
          t.string('tricks', 100);

        });
      }
    });

    knex.schema.hasTable('tricks').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('tricks', function (t) {

          t.string('name', 50);
          t.string('dificulty', 20);

        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = knex;