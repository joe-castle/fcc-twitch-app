import React from 'react';

export default ({stream, channel, onDeleteClick, index}) => (
	<li>
		<span
			onClick={() => onDeleteClick(index)}
			className='delete glyphicon glyphicon-remove-circle'></span>
		<img src={channel.logo || 'http://placehold.it/50x50'} />
		<a href={'http://www.twitch.tv/'+channel.name} target='_blank'>
			<span className='name'>{channel.display_name}</span>
		</a>
		<span className={'glyphicon glyphicon-'+(stream.stream ? 'ok':'remove')}></span>
		<span className='status'>{stream.stream && channel.status}</span>
	</li>
);
