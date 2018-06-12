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

    it('Lists All Users', (done) => {
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
                fixtures.user.id = response.body.id
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

    it('Lists All Tags', (done) => {
        request(app)
            .get('/tags')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('array')
                expect(response.body).to.deep.equal(fixtures.tags)
                done()
            })
            .catch(error => console.log(error))
    })

    it('Show One Tag By ID', (done) => {
        request(app)
            .get('/tags/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.tags[0])
                done()
            })
            .catch(error => console.log(error))
    })

    it('Show Another Tag By ID', (done) => {
        request(app)
            .get('/tags/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.tags[1])
                done()
            })
            .catch(error => console.log(error))
    })

    it('Creates A Tag', (done) => {
        request(app)
            .post('/tags')
            .send(fixtures.tag)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                fixtures.tag.id = response.body.id
                expect(response.body).to.deep.equal(fixtures.tag)
                done()
            })
            .catch(error => console.log(error))
    })

    it('Updates A Tag', (done) => {
        fixtures.tag.tag_name = 'chai'
        request(app)
            .put('/tags/12')
            .send(fixtures.tag)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                fixtures.tag.id = response.body.id
                expect(response.body).to.deep.equal(fixtures.tag)
                done()
            })
            .catch(error => console.log(error))
    })

    it('Deletes A User', (done) => {
        request(app)
            .delete('/tags/12')
            .send(fixtures.tag)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).to.be.a('object')
                fixtures.tag.id = response.body.id
                expect(response.body).to.deep.equal({ message: 'Tag Deleted!' })
                done()
            })
            .catch(error => console.log(error))
    })
})