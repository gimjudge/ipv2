import React from 'react';
//import Block from './Block';

const Jobs = ({ data }) => {

	//Deconstruct
	const {year, regional, national_avg: nationalAvg} = data;

	const percentNationAvg = Math.round((regional / nationalAvg) * 100);
	//const percentNationAvg = Math.round((190 / 100) * 100);
	
	const direction = () => {
		if (percentNationAvg > 100) {
			return <span style={{color:"#27A508"}}>above</span>;
		} else if (percentNationAvg === 100){
			return <span>on</span>;
		} else {
			return <span style={{color:"#A50827"}}>below</span>;
		}
	}
	
	//Work on Dry Solution (Block)
	return (
		<div className="five wide column ui center aligned summary-block" >
			<div>{regional}</div>
			<div>Jobs({year})</div>
			<div>{percentNationAvg}% {direction()} National average</div>
		</div>
	);
}

export default Jobs;