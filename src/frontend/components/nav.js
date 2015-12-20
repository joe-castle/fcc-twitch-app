import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Nav = ({onVisibilityClick, visibilityFilter}) => (
	<nav>
		<ul>
			{[['All','SHOW_ALL'],['Online','SHOW_ONLINE'],['Offline','SHOW_OFFLINE']]
			 .map((item, index) =>
				<li
          key={index}
          className={classNames({active: visibilityFilter === item[1]})}
					onClick={() => onVisibilityClick(item[1])}>{item[0]}</li>
			)}
		</ul>
	</nav>
);
Nav.propTypes = {
  onVisibilityClick: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default Nav;
