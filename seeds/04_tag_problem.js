const tagProblems = require('../lib/tag_problem')
exports.seed = (knex, Promise) => {

  return knex('tag_problem').del()
    .then(() => {
      return knex('tag_problem').insert(tagProblems)
    })
}
