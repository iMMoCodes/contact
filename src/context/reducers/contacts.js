import { ADD_CONTACT_ERROR, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, CLEAR_ADDED_CONTACT, CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS, LOGOUT_USER } from '../../constants/actionTypes'
import contactsInitialState from '../initialstates/contactsInitialState'

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

		case CLEAR_ADDED_CONTACT: {
			return {
				...state,
				addContact: {
					...state.addContact,
					error: null,
					loading: false,
					data: null,
				},
			}
		}

		case LOGOUT_USER: {
			return {
				...state,
				contactsInitialState,
			}
		}

		case ADD_CONTACT_LOAD: {
			return {
				...state,
				addContact: {
					...state.addContact,
					error: null,
					loading: true,
				},
			}
		}

		case ADD_CONTACT_ERROR: {
			return {
				...state,
				addContact: {
					...state.addContact,
					loading: false,
				},
			}
		}

		case ADD_CONTACT_SUCCESS: {
			return {
				...state,
				addContact: {
					...state.addContact,
					loading: false,
					data: payload,
				},
				contacts: {
					...state.contacts,
					loading: false,
					data: [payload, ...state.contacts.data],
				},
			}
		}

		default:
			return state
	}
}

export default contacts
