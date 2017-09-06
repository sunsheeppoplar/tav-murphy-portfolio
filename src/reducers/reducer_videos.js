import _ from 'lodash';

import { FETCH_VIDEOS } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
	case FETCH_VIDEOS:
		return _.mapKeys(action.payload.data.data, function(v, k) { return k })
	default:
		return state;
	}
}