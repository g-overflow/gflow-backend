const knex = require('../db/database-connection')

module.exports = {
    list() {
        return knex('users')
    },
}