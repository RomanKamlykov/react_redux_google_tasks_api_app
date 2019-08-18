import constants from '../constants';

export default function sessionReducer(state = false, action) {
	let newState

	switch (action.type) {
		case constants.SESSION_AUTHORIZE_SUCCESS:
			newState = true
			return newState

		case constants.SESSION_LOGOUT_SUCCESS:
			newState = false
			return newState

		default:
			return state
	}
}