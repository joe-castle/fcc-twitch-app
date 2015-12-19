import React, { PropTypes } from 'react';

import Streamer from './streamer';

const StreamersBox = ({streamers, onDeleteClick}) => (
	<section>
		<ul id='streamers'>
			{streamers.map((streamer, index) =>
				<Streamer
					key={index}
					stream={streamer.stream}
					channel={streamer.channel}
					onDeleteClick={onDeleteClick}
				/>
			)}
		</ul>
	</section>
);
StreamersBox.propTypes = {
  streamers: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default StreamersBox;
