import { useState, useContext, useEffect } from 'react'
import { login } from '../../context/actions/auth/login'
import { GlobalContext } from '../../context/Provider'
import { useHistory } from 'react-router-dom'

export default () => {
	const [form, setForm] = useState({})

	const history = useHistory()

	const {
		authDispatch,
		authState: {
			auth: { loading, error, data },
		},
	} = useContext(GlobalContext)

	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value })
	}

	const loginFormValid = !form.username?.length || !form.password?.length

	const onSubmit = () => {
		login(form)(authDispatch)
	}

	useEffect(() => {
		if (data) {
			if (data.user) {
				history.push('/')
			}
		}
	}, [data])

	return { form, onChange, loading, loginFormValid, error, onSubmit }
}
