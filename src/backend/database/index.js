'use strict';

import mongoose from 'mongoose';
mongoose.connect(
  'mongodb://streamer:streamer@ds033865.mongolab.com:33865/streamers'
);

const StreamersSchema = mongoose.Schema({ streamers: Array });

export default mongoose.model('Streamers', StreamersSchema);
