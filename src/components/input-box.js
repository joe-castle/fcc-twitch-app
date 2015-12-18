import React, { createClass } from 'react';

export default createClass({
	render() {
		return (
			<section>
				<div id='search' className='input-group'>
					<span className='input-group-addon'>
						<span className='glyphicon glyphicon-search'></span>
					</span>
					<input onChange={this.search} type='text' placeholder='Search...' className='form-control' />
				</div>
				<div id='add-streamer' className='input-group'>
					<span className='input-group-btn'>
						<button onClick={this.addStreamer} type='button' className='btn'>
							<span className='glyphicon glyphicon-plus'></span>
						</button>
					</span>
					<input ref='streamerInput' type='text' className='form-control' placeholder='Add a streamer...'/>
				</div>
			</section>
		);
	},
	addStreamer() {
		let node = this.refs.streamerInput;
		let text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	},
	search(e) {
		this.props.onSearchChange(e.target.value);
	}
});
