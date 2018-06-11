exports.up = function (knex, Promise) {
    return knex.schema.createTable('comment', (table) => {
        table.increments()
        table.integer('problem_id')
        table.text('user_name')
        table.text('comment_text')
        table.integer('points')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('comment')
}