import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import getContacts from '../../context/actions/contacts/getContacts'
import { GlobalContext } from '../../context/Provider'
import ContactsListUI from '../../layout/Contacts/List'

const ContactsContainer = () => {
	const { contactsDispatch, contactsState } = useContext(GlobalContext)

	const history = useHistory()

	useEffect(() => {
		getContacts(history)(contactsDispatch)
	}, [])

	return <ContactsListUI state={contactsState} />
}

export default ContactsContainer
