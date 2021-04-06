import React from 'react'
import { Container, Header, List, Message, Placeholder } from 'semantic-ui-react'
import APPHeader from '../../../components/Header'
import ImageThumb from '../../../components/ImageThumb'
import Favorites from '../Favorites'

const ContactsListUI = ({
	state: {
		contacts: { loading, error, data },
	},
}) => {
	return (
		<div>
			<APPHeader />
			<Container>
				<Header>STARRED</Header>

				<Favorites
					favorites={data.filter(
						(item) => item.is_favorite
					)}
					loading={loading}
				/>

				<Header>ALL</Header>
				{loading && (
					<>
						<Placeholder>
							<Placeholder.Header
								image
							>
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
				{!loading && data.length === 0 && (
					<Message content='No contacts yet.' />
				)}

				<List>
					{data.length > 0 &&
						data.map((contact) => (
							<List.Item
								key={
									contact.id
								}
							>
								<List.Content floated='right'>
									<span>
										{
											contact.phone_number
										}
									</span>
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
										}
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
