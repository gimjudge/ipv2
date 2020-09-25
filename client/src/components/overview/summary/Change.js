import React from 'react';

const Change = ({ data }) => {
	
	const {regional, start_year: startYear, end_year: endYear, national_avg: nationalAvg} = data;

	const percentSignColor = (percent) => {
		if (percent > 0) {
			return <span style={{color:"#27A508"}}>+{percent}%</span>;
		} else if (percent === 0){
			return <span>{percent}%</span>;
		} else {
			return <span style={{color:"#A50827"}}>-{percent}%</span>;
		}
	}

	return (
		<div className="five wide column ui center aligned summary-block">
			<div>{percentSignColor(regional)}</div>
			<div>% Change ({startYear}-{endYear})</div>
			<div>{percentSignColor(nationalAvg)}</div>
		</div>
	);
}

export default Change;

