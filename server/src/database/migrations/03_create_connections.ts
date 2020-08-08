import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        //chave extrangeira
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // O que acontece com os ids caso um professor seja removido
            .onUpdate('CASCADE')
            // o que acontece com as aulas quando um professor é removido
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}