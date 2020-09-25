import React from 'react';

// Components
import Change from './Change';
import Earnings from './Earnings';
import Jobs from './Jobs';

const Summary = ({ occupationTitle, summary} ) => {
	
	console.log (summary);

	return (
		<div className="ui container overview-section">
			<h5>Occupation Summary for {occupationTitle}</h5>
			<div className="ui grid occupation-summary">
				<Jobs data={summary.jobs} />
				<Change data={summary.jobs_growth} />
				<Earnings data={summary.earnings} />
			</div>
		</div>
	);
}

export default Summary;