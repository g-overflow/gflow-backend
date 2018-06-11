exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments().primary()
        table.text('user_name')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
}
