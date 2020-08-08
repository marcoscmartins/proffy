import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        //chave extrangeira
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // O que acontece com os ids caso um professor seja removido
            .onUpdate('CASCADE')
            // o que acontece com as aulas quando um professor é removido
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}