import React from 'react';

const Header = (props) => {
	return (
		<div>
			<h1>Occupation Overview</h1>
			{props.occupationTitle && props.regionTitle ? `${props.occupationTitle} in ${props.regionTitle}` : "Loading..."}
		</div>
	);

};

export default Header;