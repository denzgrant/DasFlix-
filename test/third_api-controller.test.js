const request = require('supertest');
const router = require('../controller/third_api-controller')


describe('GET /api/trending/', function() {
it('Get search term endpoint', function (done)
{
    request(router)
    .get('/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
    });
});