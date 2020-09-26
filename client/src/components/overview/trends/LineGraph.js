import React from 'react';
import { connect } from 'react-redux';

// Recharts Imports
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

//Components
import TriangleLineDot from './LineDots/TriangleLineDot';
import CircleLineDot from './LineDots/CircleLineDot';
import SquareLineDot from './LineDots/SquareLineDot';

class Linegraph extends React.Component {

	/* 
		Builds Data Array of objects for rechart to use.
		Expected Array [nationalTrends, regionalTrends, stateTrends]

		Expected Results example:
		[
			{year: 2013, regionalTrends: 100, stateTrends: 50, nationTrends: 75},
			{year: 2014, regionalTrends: 110, stateTrends: 55, nationTrends: 80}
		]
		Really need to work on dry.
		Break up into two functions?
	*/
	buildTrendsDataArray = (dataTitles = ['nationTrends', 'regionalTrends', 'stateTrends']) => {
		const {start_year: startYear, end_year: endYear, nation: nationTrends, regional: regionalTrends, state: stateTrends } = this.props.trendComparison;

		const dataValues = {nationTrends, regionalTrends, stateTrends} 

		let data = [];
		const yearCount = endYear - startYear +1;
		let year = '';

		let baseValues = {}

		let yearData = {};
		let yearDataPercent = {};

		//Loop Through years
		for (let i = 0; i < yearCount; i++) {
			yearData = {};
			yearDataPercent = {};

			//Loop Through Datatypes
			for (let index = 0; index < dataTitles.length; index++) {
				
				//console.log(dataTitles.length);
				//Set and reset variable for loop
				year = startYear+i;
				yearData.year = year;
				yearDataPercent.year = year;

				if (i === 0) {
					//Actual Values
					yearData[dataTitles[index]] = dataValues[dataTitles[index]][0];
					//Base Value to compute percentage
					baseValues[dataTitles[index]] = dataValues[dataTitles[index]][0]
					yearDataPercent[dataTitles[index]] = 0;
				}
				
				/*
					This if will leave out middle values if there is missing Data. Unable to know what data is connected to what year.
				*/
				if (dataValues[dataTitles[index]].length !== yearCount) {
					
					// if (i === 0) {
					// 	//Actual Values
					// 	yearData[dataTitles[index]] = dataValues[dataTitles[index]][0];
					// 	//Percentage
					// 	yearDataPercent[dataTitles[index]] = 0;
					// } else 
					
					if (i === yearCount - 1) {
						//Actual Values
						yearData[dataTitles[index]] = dataValues[dataTitles[index]][dataValues[dataTitles[index]].length-1];
						//percentage
						yearDataPercent[dataTitles[index]] = (( dataValues[dataTitles[index]][dataValues[dataTitles[index]].length-1] / baseValues[dataTitles[index]] )-1)*100;
					}
				} else {
					//Actual Values
					yearData[dataTitles[index]] = dataValues[dataTitles[index]][i];
					//Percentage
					yearDataPercent[dataTitles[index]] = (( dataValues[dataTitles[index]][i]/baseValues[dataTitles[index]] )-1)*100;
				}
				

				
			}
			//Actual Values
			//data.push(yearData);
			//percentage
			data.push(yearDataPercent);
		}
		return data;
	}

	render() {

		console.log(this.buildTrendsDataArray());
		//Need to Make responsive
		return (
			<LineChart
				width={900}
				height={400}
				data={this.buildTrendsDataArray()}
				margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			>
				<CartesianGrid />
				<Legend />
				<XAxis dataKey="year" axisLine={false} tickLine={false} />
				<YAxis axisLine={false} tickLine={false}/>
				<Tooltip />
				<Line dataKey='nationTrends' dot={<TriangleLineDot />} stroke='#66ccff' />
				<Line dataKey='stateTrends' dot={<SquareLineDot />} stroke='#0066ff' />
				<Line dataKey='regionalTrends' dot={<CircleLineDot />} stroke='#0000cc' />
			</LineChart>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		trendComparison: state.overview.trend_comparison
	}
};

export default connect(mapStateToProps)(Linegraph);
