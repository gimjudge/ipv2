import React from 'react';

const Earnings = ({data}) => {

	const {regional, national_avg: nationalAvg} = data;

	// 
	return (
		<div className="five wide column ui center aligned summary-block">
			<div>${regional.toFixed(2)}/hr</div>
			<div>Median Hourly Earnings</div>
			<div>Nation: {nationalAvg.toFixed(2)}/hr</div>
		</div>);
}

export default Earnings;