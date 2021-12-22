const knex = require("knex")({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'password',
    database: 'db'
  },
  searchPath: ["knex", "public"],
});

(async () => {
  try {
    if (knex.schema.hasTable("skaters")) {
      knex.schema
        .withSchema("public")
        .createTable("skaters", function (table) {
          table.string("name", 30).primary();
          table.t.specificType('trickNames', 'VARCHAR[]').notNullable();
        });
    }

    if (knex.schema.hasTable("trick")) {
      knex.schema
        .withSchema("public")
        .createTable("trick", function (table) {
          table.string("trickName", 50).primary();
          table.string("difficulty").notNullable();
        });
    }

  } catch (error) {
    console.log(error);
  }


})();

module.exports = knex;