exports.up = function (knex, Promise) {
    return knex.schema.createTable('tag', (table) => {
        table.increments().primary()
        table.text('tag_name')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tag')
}