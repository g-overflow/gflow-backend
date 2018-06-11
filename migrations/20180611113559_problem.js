exports.up = function (knex, Promise) {
    return knex.schema.createTable('problem', (table) => {
        table.increments()
        table.integer('users_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index()
        table.date('date')
        table.text('problem_title')
        table.text('problem_text')
        table.boolean('problem_solved')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('problem')
}
