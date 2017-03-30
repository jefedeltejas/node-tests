const request = require('supertest'),
      expect = require('expect');

var app = require('./server').app;

// Server
  // GET /
    // some test case
  // GET /users
    // some test case

describe('Server', () => {
  describe('GET /', () => {
    it('should return Attention shoppers response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Rick Ross',
            jobTitle: 'Boss'
          });
        })
        .end(done);
    });
  });
});



// Make a new test
// assert 200
// Assert that you exist in users array
