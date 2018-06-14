const problems = require('../lib/problems')

exports.seed = (knex, Promise) => {

  return knex('problem').del()
    .then(() => {
      return knex('problem').insert(problems)
    })
    .then(() => knex.raw('DELETE FROM "user"; ALTER SEQUENCE problem_id_seq RESTART WITH 3;'))
}