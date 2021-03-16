import React from 'react'
import { Button, Icon, Image, Menu } from 'semantic-ui-react'
import logo from '../../assets/images/Awesome-Tux.svg'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Menu pointing>
			<Image src={logo} width={50} />
			<Menu.Item as={Link} to='/' style={{ fontSize: '2rem' }}>
				iMMoContacts
			</Menu.Item>
			<Menu.Item position='right'>
				<Button as={Link} to='/contacts/create' inverted color='green' icon>
					<Icon name='address book'></Icon>
					Create Contact
				</Button>
			</Menu.Item>
			<Menu.Item>
				<Button color='red' inverted icon>
					<Icon name='log out'></Icon>
					Logout
				</Button>
			</Menu.Item>
		</Menu>
	)
}

export default Header
