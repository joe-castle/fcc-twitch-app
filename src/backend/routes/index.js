'use strict';

const express = require('express');
const path = require('path');

const app = express();

module.exports = (staticPath) => {
  app.use('/', express.static(path.join(__dirname, staticPath)));

  app.get('/streamers', (req, res) => {
    res.json(['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx','RobotCaleb','thomasballinger','noobs2ninjas','beohoff', 'medrybw']);
  });

  return app;
};
