const tags = require('../lib/tags')

exports.seed = (knex, Promise) => {

  return knex('tag').del()
    .then(() => {
      return knex('tag').insert(tags)
    })
  // .then(() => knex.raw('DELETE FROM "user"; ALTER SEQUENCE tag_id_seq RESTART WITH 12;'))
}
