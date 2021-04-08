import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import getContacts from '../../context/actions/contacts/getContacts'
import { GlobalContext } from '../../context/Provider'
import ContactsListUI from '../../layout/Contacts/List'

const ContactsContainer = () => {
	const { contactsDispatch, contactsState } = useContext(GlobalContext)

	const history = useHistory()

	const {
		contacts: { data },
	} = contactsState

	const deleteContact = (id) => {
		console.log(`id`, id)
	}

	useEffect(() => {
		if (data.length === 0) {
			getContacts(history)(contactsDispatch)
		}
	}, [])

	return <ContactsListUI state={contactsState} deleteContact={deleteContact} />
}

export default ContactsContainer
