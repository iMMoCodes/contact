import React, { useEffect } from 'react'
import { register } from '../../context/actions/register'
import RegisterUI from '../../layout/Register'

const RegisterContainer = () => {
	useEffect(() => {
		register()
	}, [])

	return <RegisterUI />
}

export default RegisterContainer
