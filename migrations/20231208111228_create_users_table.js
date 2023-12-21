/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) { return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name", 50).notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
    table.timestamp("updated_at").nullable();
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};