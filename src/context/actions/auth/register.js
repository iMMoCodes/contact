import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axios'

export const register = ({ email, password, username, firstName: first_name, lastName: last_name }) => (dispatch) => {
	dispatch({
		type: REGISTER_LOADING,
	})

	axiosInstance.post('/auth/register', { email, password, username, first_name, last_name })
		.then((res) => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			})
		})
		.catch((err) => {
			dispatch({
				type: REGISTER_ERROR,
				payload: err.response ? err.response.data : 'COULD NOT CONNECT',
			})
		})
}
