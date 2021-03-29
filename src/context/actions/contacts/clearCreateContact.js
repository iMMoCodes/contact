import { CLEAR_ADDED_CONTACT } from '../../../constants/actionTypes'

export default () => (dispatch) => {
	dispatch({
		type: CLEAR_ADDED_CONTACT,
	})
}
