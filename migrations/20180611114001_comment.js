exports.up = function (knex, Promise) {
    return knex.schema.createTable('comment', (table) => {
        table.increments()
        table.integer('problem_id')
            .notNullable()
            .references('id')
            .inTable('problem')
            .onDelete('CASCADE')
            .index()
        table.text('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index()
        table.text('comment_text')
        table.integer('points')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('comment')
}