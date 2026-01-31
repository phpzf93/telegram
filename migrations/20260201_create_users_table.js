exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.bigInteger('telegram_chat_id').notNullable().unique();
    table.string('username').nullable();
    table.string('first_name').nullable();
    table.string('last_name').nullable();
    table.jsonb('meta').nullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
