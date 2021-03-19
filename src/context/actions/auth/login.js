import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

export const login = ({ password, username }) => (dispatch) => {
	dispatch({
		type: LOGIN_LOADING,
	})

	axiosInstance()
		.post('/auth/login', { password, username })
		.then((res) => {
			localStorage.token = res.data.token
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			})
		})
		.catch((err) => {
			dispatch({
				type: LOGIN_ERROR,
				payload: err.response ? err.response.data : 'COULD NOT CONNECT',
			})
		})
}
