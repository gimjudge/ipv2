import { FETCH_OCCUPATION_OVERVIEW, FETCH_OCCUPATION_OVERVIEW_JSON } from '../types';

export default (state={}, action) => {
	switch (action.type) {
		case FETCH_OCCUPATION_OVERVIEW:
			return {...state, overview: action.payload}
		case FETCH_OCCUPATION_OVERVIEW_JSON:
			// if (action.payload.length >) {

			// }
			return {...state, overview: action.payload[0].data}
		default:
			return state;
	}
};