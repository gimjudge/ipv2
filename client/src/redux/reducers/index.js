import { FETCH_OCCUPATION_OVERVIEW } from '../types';

export default (state={}, action) => {
	switch (action.type) {
		case FETCH_OCCUPATION_OVERVIEW:
			return {...state, overview: action.payload}
		default:
			return state;
	}
};