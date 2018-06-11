const users = require('../users')

exports.seed = (knex, Promise) => {

  return knex('table_name').del()
    .then(() => {
      return knex('users').insert(users)
    })
}
