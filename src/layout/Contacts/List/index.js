import React from 'react'
import { Container, Image, List, Message, Placeholder } from 'semantic-ui-react'
import Header from '../../../components/Header'
import ImageThumb from '../../../components/ImageThumb'

const ContactsListUI = ({
	state: {
		contacts: { loading, error, data },
	},
}) => {
	return (
		<div>
			<Header />
			<Container>
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
