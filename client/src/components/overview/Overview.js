import React from 'react';

import Header from './Header';

class Overview extends React.Component {

	render () {
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

export default Overview;