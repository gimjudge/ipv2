import React from 'react';
import { connect } from 'react-redux';

// Redux Action
import { fetchOccupationOverview } from '../../redux/actions';

// Components
import Header from './Header';

class Overview extends React.Component {

	componentDidMount() {
		this.props.fetchOccupationOverview();
	}

	render() {
		return (
			<div class="ui container">
				<Header />
				Summary
				<br />
				Regional Trends
				<br />
				Industries Employing
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		overview: state.overview
	};
};

export default connect(mapStateToProps, { fetchOccupationOverview })(Overview);