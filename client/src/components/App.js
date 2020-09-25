import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import Overview from './overview/Overview';

import '../css/App.css';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<Route path="/" exact component={Overview} />
			</Router>
		</div>
	);
};

export default App;