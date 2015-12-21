'use strict';

const request = require('supertest');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const Streamers = require('../src/backend/models/streamers');

// Public path relative to routes directory.
const app = require('../src/backend/routes')(
  '../public',
  Streamers.find
);
const streamers = ["freecodecamp","storbeck","terakilobyte","habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

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
