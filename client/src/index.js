import React from 'react';
import ReactDOM from 'react-dom';

// Redux 
import { createStore, applyMiddleware, compose } from 'redux';
//// React Redux
import { Provider } from 'react-redux';
//// Redux Middleware
import reduxThunk from 'redux-thunk';
//// Redux Reducers
import reducers from './redux/reducers';

// Main App
import App from './components/App';

// To use zalmoxisus / redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create Redux Store
const store = createStore(
	reducers, 
	composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

