const users = require('../lib/users')

exports.seed = (knex, Promise) => {

  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert(users)
    })
  // .then(() => knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 6;'))
}
