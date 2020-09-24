import React from 'react';

// Components
import Change from './Change';
import Earnings from './Earnings';
import Jobs from './Jobs';

const Summary = ({ occupationTitle, summary} ) => {
	
	console.log (summary);

	return (
		<div className="ui container">
			<h5>Occupation Summary for {occupationTitle}</h5>
			<Jobs />
			<Change />
			<Earnings />
		</div>
	);
}

export default Summary;