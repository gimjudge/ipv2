// Mocky.io
import emsi from '../../api/emsi';
// JSON Server
import emsiJSON from '../../api/emsiJSON';


import { FETCH_OCCUPATION_OVERVIEW, FETCH_OCCUPATION_OVERVIEW_JSON } from '../types';

/*
	Sample	API	Request	Object
	{
		"occupation": "15-1131",
		"area_type": "msa",
		"area_code": "42660"
	}
*/
export const fetchOccupationOverview = () => async (dispatch) => {
	const response = await emsi.get();
	dispatch({type: FETCH_OCCUPATION_OVERVIEW, payload: response.data});
};

export const fetchOccupationOverviewJSON = () => async (dispatch) => {
	const response = await emsiJSON.get('/occupation_data', {
		"occupation": "15-1131",
		"area_type": "msa",
		"area_code": "42660"
	});
	dispatch({type: FETCH_OCCUPATION_OVERVIEW_JSON, payload: response.data});
};