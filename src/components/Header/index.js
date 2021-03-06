import React, { useContext } from 'react'
import { Button, Icon, Image, Input, Menu } from 'semantic-ui-react'
import logo from '../../assets/images/Awesome-Tux.svg'
import { Link, useHistory, useLocation } from 'react-router-dom'
import logout from '../../context/actions/auth/logout'
import { GlobalContext } from '../../context/Provider'
import isAuthenticated from '../../utils/isAuthenticated'
import searchContacts from '../../context/actions/contacts/searchContacts'

const Header = () => {
	const { pathname } = useLocation()
	const history = useHistory()

	const { contactsDispatch: dispatch } = useContext(GlobalContext)

	const handleUserLogout = () => {
		logout(history)(dispatch)
	}

	const onChange = (e, { value }) => {
		const searchText = value.trim().replace(/' '/g, '')

		searchContacts(searchText)(dispatch)
	}

	return (
		<Menu pointing>
			<Image src={logo} width={50} />
			<Menu.Item as={Link} to='/' style={{ fontSize: '2rem' }}>
				iMMoContacts
			</Menu.Item>

			{pathname === '/' && (
				<Menu.Item position='right'>
					<Input style={{ width: 450 }} placeholder='Search Contacts' onChange={onChange} />
				</Menu.Item>
			)}

			{pathname === '/' && (
				<Menu.Item position='right'>
					<Button as={Link} to='/contacts/create' inverted color='green' icon>
						<Icon name='address book'></Icon>
						Create Contact
					</Button>
				</Menu.Item>
			)}

			{isAuthenticated() && (
				<Menu.Item position='right'>
					<Button onClick={handleUserLogout} color='red' inverted icon>
						<Icon name='log out'></Icon>
						Logout
					</Button>
				</Menu.Item>
			)}
		</Menu>
	)
}

export default Header
