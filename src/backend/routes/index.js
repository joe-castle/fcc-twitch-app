'use strict';

const express = require('express');
const path = require('path');

const app = express();

module.exports = (staticPath, model) => {
  app.use('/', express.static(path.join(__dirname, staticPath)));

  app.get('/streamers', (req, res) => {
    model.find((err, data) => {
      if (err) { throw err };
      if (data) {
        res.json(data[0].streamers);
      } else {
        res.send('Data not found');
      }
    });
  });

  return app;
};
