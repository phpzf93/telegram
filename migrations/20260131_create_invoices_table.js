exports.up = function(knex) {
  return knex.schema.createTable('invoices', table => {
    table.increments('id').primary();
    table.string('external_id').notNullable().unique();
    table.string('xendit_invoice_id').nullable().index();
    table.bigInteger('amount').notNullable();
    table.string('currency').defaultTo('PHP');
    table.string('payer_email').nullable();
    table.string('description').nullable();
    table.string('status').notNullable().defaultTo('PENDING');
    table.jsonb('raw_payload').nullable();
    table.bigInteger('chat_id').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('invoices');
};