'use strict';

const request = require('supertest');

// Public path relative to routes directory.
const app = require('../src/backend/routes')(
  '../public'
);

const streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx','RobotCaleb','thomasballinger','noobs2ninjas','beohoff', 'medrybw'];

describe('Request to root path', function() {
  it('Returns 200 status', function(done) {
    request(app)
      .get('/')
      .expect(200, done)
  });
  it('Returns a Content-Type of HTML', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done)
  });
});

describe('GET /streamers', function() {
  it('Returns a 200 status', function(done) {
    request(app)
      .get('/streamers')
      .expect(200, done);
  });
  it('Returns a Content-Type of JSON', function(done) {
    request(app)
      .get('/streamers')
      .expect('Content-Type', /json/, done)
  });
  it('Returns initial list of streamers', function(done) {
    request(app)
      .get('/streamers')
      .expect(JSON.stringify(streamers), done)
  });

});
