const express = require('express')
const router = express.Router()
const knex = require('../db/database-connection')

router.get('/', (request, response, next) => {
    return knex('problem')
        .join('tag_problem', 'tag_problem.problem_id', 'problem.id')
        .join('tag', 'tag_problem.tag_id', 'tag.id')
        .select(
            'problem.id as problem_id',
            'tag.id as tag_id'
        )
        .then(tags => {
            console.log(tags)
            if (tags) {
                return response.json(tags)
            } else {
                return response.status(404).send({ message: 'No Tags Found!' })
            }
        })
})

module.exports = router