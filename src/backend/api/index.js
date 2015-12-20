'use strict';

import path from 'path';
import express from 'express';
const app = express();

import Streamers from '../database'

app.use(express.static(path.join(__dirname, 'public')));

app.get('/streamers', (req, res) => {
  Streamers.find((err, streamers) => {
    if (err) throw err;
    res.json(streamers[0].streamers);
  });
});

export default app;
