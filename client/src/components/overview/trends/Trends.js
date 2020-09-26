import React from 'react';
import LineGraph from './LineGraph';
import Legend from './Legend';

const Trends = () => {
	return (
		<div className="ui container overview-section regional-trends">
			<h5>Regional Trends</h5>
			<div className="ui divider"></div>
			<LineGraph />
			<Legend />
		</div>
	);
};

export default Trends;