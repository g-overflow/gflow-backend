const tags = require('../lib/tags')

exports.seed = (knex, Promise) => {

  return knex('tag').del()
    .then(() => {
      return knex('tag').insert(tags)
    })
}
