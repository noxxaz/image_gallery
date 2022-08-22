/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable("images", function (table) {
    table.increments("image_id").primary(); // Primary key
    table.string("filename", 255).notNullable();
    table.string("thumbnail_filename", 255).notNullable();
    table.string("description", 255).notNullable();
    table.dateTime("date_created").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable("images");
};
