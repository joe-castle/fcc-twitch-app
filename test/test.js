'use strict';

import mongoose from 'mongoose';
import request from 'supertest';
import app from '../src/backend/api';

const streamers = ["freecodecamp","storbeck","terakilobyte","habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","medrybw"];

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

describe('GET /streamers', () => {
  it('Returns a 200 status', (done) => {
    request(app)
      .get('/streamers')
      .expect(200, done);
  });
  it('Returns a Content-Type of JSON', (done) => {
    request(app)
      .get('/streamers')
      .expect('Content-Type', /json/, done)
  });
  it('Returns initial list of streamers', (done) => {
    request(app)
      .get('/streamers')
      .expect(JSON.stringify(streamers), done)
  });

});
