import { ADD_CONTACT_ERROR, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS } from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'
import { CONNECTION_ERROR } from '../../../constants/api'
import { FIREBASE_IMAGE_REF } from '../../../constants/firebase'
import { storage } from '../../../helpers/firebase'

export default ({ firstName: first_name, lastName: last_name, phoneNumber: phone_number, countryCode: country_code, contactPicture: contact_picture, isFavorite: is_favorite }) => (dispatch) => {
	const saveToBackend = (url = null) => {
		axiosInstance()
			.post('/contacts/', {
				first_name,
				last_name,
				phone_number,
				country_code,
				contact_picture: url,
				is_favorite,
			})
			.then((res) => {
				dispatch({
					type: ADD_CONTACT_SUCCESS,
					payload: res.data,
				})
			})
			.catch((err) => {
				dispatch({
					type: ADD_CONTACT_ERROR,
					payload: err.response ? err.response.data : CONNECTION_ERROR,
				})
			})
	}

	dispatch({
		type: ADD_CONTACT_LOAD,
	})

	if (contact_picture) {
		storage.ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
			.put(contact_picture)
			.on(
				'state changed',
				(snapshot) => {},
				async (error) => {},
				async () => {
					const url = await storage.ref(FIREBASE_IMAGE_REF).child(contact_picture.name).getDownloadURL()
					saveToBackend(url)
				}
			)
	} else {
		saveToBackend()
	}
}
