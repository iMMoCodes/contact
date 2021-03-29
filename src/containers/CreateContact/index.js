import React, { useContext, useEffect, useState } from 'react'
import CreateContact from '../../layout/Contacts/Create'
import createContact from '../../context/actions/contacts/createContact'
import { GlobalContext } from '../../context/Provider'
import { useHistory } from 'react-router'
import clearCreateContact from '../../context/actions/contacts/clearCreateContact'

const CreateContactContainer = () => {
	const [form, setForm] = useState({})
	const history = useHistory()

	const {
		contactsDispatch,
		contactsState: {
			addContact: { loading, error, data },
		},
	} = useContext(GlobalContext)

	useEffect(() => {
		if (data) {
			history.push('/')
		}
		return () => {
			clearCreateContact()(contactsDispatch)
		}
	}, [data])

	const formIsHalfFilled = Object.values(form).filter((item) => item && item !== '')?.length > 0 && !data

	console.log(`loading`, loading)

	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value })
	}
	console.log(`form`, form)

	const onSubmit = () => {
		createContact(form)(contactsDispatch)
	}

	const formInvalid = !form.firstName?.length || !form.lastName?.length || !form.countryCode?.length || !form?.phoneNumber.length

	return <CreateContact formIsHalfFilled={formIsHalfFilled} formInvalid={formInvalid} onSubmit={onSubmit} onChange={onChange} form={form} loading={loading} />
}

export default CreateContactContainer
