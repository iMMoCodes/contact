import React from 'react'
import { Button, Container, Header, Icon, List, Message, Placeholder } from 'semantic-ui-react'
import APPHeader from '../../../components/Header'
import ImageThumb from '../../../components/ImageThumb'
import Favorites from '../Favorites'

const ContactsListUI = ({
	deleteContact,
	starUnstarContact,
	state: {
		contacts: { loading, isSearchActive, foundContacts, data },
	},
}) => {
	const currentContacts = isSearchActive ? foundContacts : data

	return (
		<div>
			<APPHeader />
			<Container>
				<Header>STARRED</Header>

				<Favorites favorites={currentContacts.filter((item) => item.is_favorite)} loading={loading} />

				<Header>ALL</Header>
				{loading && (
					<>
						<Placeholder>
							<Placeholder.Header image>
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Header>
							<Placeholder.Paragraph>
								<Placeholder.Line />
								<Placeholder.Line />
								<Placeholder.Line />
								<Placeholder.Line />
							</Placeholder.Paragraph>
						</Placeholder>
					</>
				)}
				{!loading && currentContacts.length === 0 && <Message content='No contacts found.' />}

				<List>
					{currentContacts.length > 0 &&
						currentContacts.map((contact) => (
							<List.Item key={contact.id} disabled={contact.deleting}>
								<List.Content floated='right'>
									<span>
										{
											contact.country_code
										}
										{
											'-'
										}
										{
											contact.phone_number
										}
									</span>
									<Button
										color='red'
										size='tiny'
										onClick={() => {
											deleteContact(
												contact.id
											)
										}}
									>
										<Icon name='delete' />
									</Button>
									<Button
										size='tiny'
										onClick={() => {
											starUnstarContact(
												contact.id,
												contact.is_favorite
											)
										}}
									>
										{contact.is_favorite ? (
											<Icon
												name='star outline'
												color='black'
											/>
										) : (
											<Icon
												name='star'
												color='yellow'
											/>
										)}
									</Button>
								</List.Content>
								<List.Content
									style={{
										display:
											'flex',
										alignItems:
											'center',
									}}
								>
									<ImageThumb
										circular
										firstName={
											contact.first_name
										}
										lastName={
											contact.last_name
										}
										src={
											contact.contact_picture
										}
										style={{
											width: 50,
											height: 50,
										}}
									/>
									<span>
										{
											contact.first_name
										}{' '}
										{
											contact.last_name
										}{' '}
										{contact.is_favorite && (
											<Icon
												name='star'
												color='yellow'
											/>
										)}
									</span>
								</List.Content>
							</List.Item>
						))}
				</List>
			</Container>
		</div>
	)
}

export default ContactsListUI
