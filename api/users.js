const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (request, response) => {
    return queries.list().then(users => response.json(users))
})

module.exports = router