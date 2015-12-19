import React, { PropTypes } from 'react';

const Streamer = ({stream, channel, onDeleteClick}) => (
	<li>
		<span
			onClick={() => onDeleteClick(channel._id)}
			className='delete glyphicon glyphicon-remove-circle'></span>
		<img src={channel.logo || 'http://placehold.it/50x50'} />
		<a href={`http://www.twitch.tv/${channel.name}`} target='_blank'>
			<span className='name'>{channel.display_name}</span>
		</a>
		<span className={`glyphicon glyphicon-${stream.stream ? 'ok':'remove'}`}></span>
		<span className='status'>{stream.stream && channel.status}</span>
	</li>
);
Streamer.propTypes = {
  stream: PropTypes.object.isRequired,
  channel: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Streamer;
