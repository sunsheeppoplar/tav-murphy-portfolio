import { SELECT_MOBILE_NAV } from '../actions';

export default function(state = {
		isClosed: true 
	}, action) {
	switch (action.type) {
		case SELECT_MOBILE_NAV:
			return {
				...state,
				isClosed: !state.isClosed,
			}
		default:
			return state;
	}
}