import React, { useState } from 'react'
import CreateContact from '../../layout/Contacts/Create'

const CreateContactContainer = () => {
	const [form, setForm] = useState({})
	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value })
	}
	console.log(`form`, form)
	return <CreateContact onChange={onChange} form={form} />
}

export default CreateContactContainer
