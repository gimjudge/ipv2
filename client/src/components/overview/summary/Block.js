import React from 'react';

//Work on Dry Solution
const Block = ({ rowOne, rowTwo, rowThree}) => {
	
	return (
		<div className="five wide column ui center aligned occupation-summary">
			<div>{rowOne}</div>
			<div>{rowTwo}</div>
			<div>{rowThree}</div>
		</div>
	);
}

export default Block;