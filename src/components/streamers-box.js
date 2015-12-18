import React from 'react';

import Streamer from './streamer';

export default ({streamers, onDeleteClick}) => (
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
