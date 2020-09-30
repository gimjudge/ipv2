import React from 'react';
import { connect } from 'react-redux';

// Redux Action
import { fetchOccupationOverview, fetchOccupationOverviewJSON } from '../../redux/actions';

// Components
import Header from './Header';
import Summary from './summary/Summary';
import Trends from './trends/Trends';

class Overview extends React.Component {

	componentDidMount() {
		//Mocky
		//this.props.fetchOccupationOverview();
		//JSON Server
		this.props.fetchOccupationOverviewJSON();
	}

	render() {
		
		if (this.props.overview) {
			//console.log(this.props.overview)
			// Dry Occupation Title
			const occupationTitle = this.props.overview.occupation.title;
			return (
				<div className="ui container">
					<Header occupationTitle={occupationTitle} regionTitle={this.props.overview.region.title} />
					<Summary occupationTitle={occupationTitle} summary={this.props.overview.summary} />
					<Trends />
					<br />
					Industries Employing
				</div>
			);
		} else {
			return (
				<div className="ui container">
					<Header />
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		overview: state.overview
	};
};

export default connect(mapStateToProps, { fetchOccupationOverview, fetchOccupationOverviewJSON })(Overview);