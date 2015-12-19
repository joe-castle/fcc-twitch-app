'use strict';
let path = require('path');

let express = require('express');
let app = express();

let mongoose = require('mongoose');
mongoose.connect('mongodb://streamer:streamer@ds033865.mongolab.com:33865/streamers');

let StreamersSchema = mongoose.Schema({ streamers: Array });
let Streamers = mongoose.model('Streamers', StreamersSchema);

app.use(express.static(path.join(__dirname, 'build/public')));

app.get('/streamers', (req, res) => {
  Streamers.find((err, streamers) => {
    if (err) throw err;
    res.json(streamers[0].streamers);
  });
});

app.listen(8000, () =>
  console.log('Listening on port', 8000)
);
