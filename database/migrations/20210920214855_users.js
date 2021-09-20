exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments("id");
      tbl.string("role", 128).notNull();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("email", 128).notNull().unique();
      tbl.string("username", 128).notNull().unique();
      tbl.string("password", 128).notNull();
      tbl
        .integer("role_id", 128)
        .unsigned()
        .notNull()
        .references("roles.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
