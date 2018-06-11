exports.up = function (knex, Promise) {
    return knex.schema.createTable('problem', (table) => {
        table.increments()
        table.integer('users_id')
        table.date('date')
        table.text('problem_title')
        table.text('problem_text')
        table.text('tags')
        table.boolean('problem_solved')
        table.integer('comment_id')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('problem')
}
