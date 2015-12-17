import React from 'react';

export default ({onVisibilityClick, visibilityFilter}) => (
	<nav>
		<ul>
			{[['All','SHOW_ALL'],['Online','SHOW_ONLINE'],['Offline','SHOW_OFFLINE']]
			 .map((item, index) =>
				<li
          className={visibilityFilter === item[1] ? 'active' : ''}
			    key={index}
					onClick={() => onVisibilityClick(item[1])}>{item[0]}</li>
			)}
		</ul>
	</nav>
);
