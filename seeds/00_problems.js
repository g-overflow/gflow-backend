const problems = require('../lib/problems')

exports.seed = (knex, Promise) => {

  return knex('problem').del()
    .then(() => {
      return knex('problem').insert(problems)
    })
}