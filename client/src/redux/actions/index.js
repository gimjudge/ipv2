import emsi from '../../api/emsi';

import { FETCH_OCCUPATION_OVERVIEW } from '../types';

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