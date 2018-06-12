const comments = require('../lib/comments')
exports.seed = (knex, Promise) => {

  return knex('comment').del()
    .then(() => {
      return knex('comment').insert(comments)
    })
}
