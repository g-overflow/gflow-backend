const express = require('express')
const router = express.Router()
const queries = require('../db/problemQueries')
const knex = require('../db/database-connection')

function isValidId(request, response, next) {
    !isNaN(request.params.id)
        ? next()
        : next(new Error('Invalid ID'))
}

function validProblem(submission) {
    const date = typeof submission.date == 'string' && submission.date.trim() != ''
    const problemTitle = typeof submission.problem_title == 'string' && submission.problem_title.trim() != ''
    const problemText = typeof submission.problem_text == 'string' && submission.problem_text.trim() != ''
    const problemSolved = typeof submission.problem_solved == 'boolean'
    return date && problemTitle && problemText && problemSolved
}

router.get('/', (request, response) => {
    return queries.list().then(problems => response.json(problems))
})

router.get('/:id', isValidId, (request, response) => {
    return queries.read(request.params.id)
        .then(problem => {
            if (problem) {
                return response.json(problem)
            } else {
                return response.status(404).send({ message: 'Problem not found!' })
            }
        })
})

router.get('/users/:id/', (request, response, next) => {
    return knex('users').innerJoin('problem', 'users.id', 'problem.users_id')
        .where('users.id', request.params.id)
        .then(user => {
            if (user) {
                return response.json(user)
            } else {
                return response.status(404).send({ message: 'User doesn\'t exist!' })
            }
        })
})

router.post('/', (request, response, next) => {
    validProblem(request.body)
        ? queries.create(request.body).then(problem => response.json(problem[0]))
        : next(new Error('Invalid Problem!'))
})

router.put('/:id', isValidId, (request, response, next) => {
    validProblem(request.body)
        ? queries.update(request.params.id, request.body)
            .then(problem => response.json(problem[0]))
        : next(new Error('Invalid Problem!'))
})

router.delete('/:id', isValidId, (request, response) => {
    return queries.delete(request.params.id).then(() => {
        return response.json({ message: 'Problem Deleted!' })
    })
})

module.exports = router