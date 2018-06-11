exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments()
        table.integer('problem_id')
            .notNullable()
            .references('id')
            .inTable('problem')
            .onDelete('CASCADE')
            .index()
        table.integer('tag_id')
            .notNullable()
            .references('id')
            .inTable('tag')
            .onDelete('CASCADE')
            .index()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
}