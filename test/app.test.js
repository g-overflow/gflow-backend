const request = require('supertest')
const knex = require('../db/database-connection')
const expect = require('chai').expect
const app = require('../index')
const fixtures = require('./fixtures')

describe('Que Overflow', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => knex.seed.run())
            .then(() => done())
    })

    it('Lists All Records', (done) => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('array')
                expect(response.body).to.deep.equal(fixtures.users)
                done()
            })
            .catch(error => console.log(error))
    })

    it('Show One User By ID', (done) => {
        request(app)
            .get('/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.users[0])
                done()
            })
            .catch(error => console.log(error))
    })

    it('Show Another User By ID', (done) => {
        request(app)
            .get('/users/4')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.users[3])
                done()
            })
            .catch(error => console.log(error))
    })

    it('Creates A User', (done) => {
        request(app)
            .post('/users')
            .send(fixtures.user)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                fixtures.album.id = response.body.id
                expect(response.body).to.deep.equal(fixtures.user)
                done()
            })
            .catch(error => console.log(error))
    })

    it('Updates A User', (done) => {
        fixtures.user.user_name = 'ninjames'
        request(app)
            .put('/users/6')
            .send(fixtures.user)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                fixtures.user.id = response.body.id
                expect(response.body).to.deep.equal(fixtures.user)
                done()
            })
            .catch(error => console.log(error))
    })

    it('Deletes A User', (done) => {
        request(app)
            .delete('/users/6')
            .send(fixtures.user)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                fixtures.user.id = response.body.id
                expect(response.body).to.deep.equal({ message: 'User Deleted!' })
                done()
            })
            .catch(error => console.log(error))
    })
})