import { CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS } from '../../constants/actionTypes'

const contacts = (state, { payload, type }) => {
	switch (type) {
		case CONTACTS_LOADING: {
			return {
				...state,
				contacts: {
					...state.contacts,
					loading: true,
				},
			}
		}
		case CONTACTS_LOAD_SUCCESS: {
			return {
				...state,
				contacts: {
					...state.contacts,
					loading: false,
					data: payload,
				},
			}
		}
		case CONTACTS_LOAD_ERROR: {
			return {
				...state,
				contacts: {
					...state.contacts,
					loading: false,
					error: payload,
				},
			}
		}
		default:
			return state
	}
}

export default contacts
