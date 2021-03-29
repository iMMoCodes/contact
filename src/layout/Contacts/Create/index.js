import React from 'react'
import { Button, Card, Form, Grid, Header as SemanticHeader } from 'semantic-ui-react'
import Header from '../../../components/Header'
import './index.css'

const CreateContact = ({ onChange }) => {
	return (
		<div>
			<Header />
			<Grid centered>
				<Grid.Column className='form-column'>
					<SemanticHeader>Create Contact</SemanticHeader>
					<Card fluid>
						<Card.Content>
							<Form unstackable>
								<div className='contact-picture'>
									<span>Choose a picture</span>
								</div>
								<Form.Group widths={2}>
									<Form.Input
										label='First name'
										name='firstName'
										onChange={onChange}
										placeholder='First name'
									/>
									<Form.Input
										label='Last name'
										name='lastName'
										onChange={onChange}
										placeholder='Last name'
									/>
								</Form.Group>
								<Form.Group widths={2}>
									<Form.Input
										label='Country'
										name='countryCode'
										onChange={onChange}
										placeholder='Country'
									/>
									<Form.Input
										label='Phone number'
										name='phoneNumber'
										onChange={onChange}
										placeholder='Phone number'
									/>
								</Form.Group>
								<Form.Checkbox
									label='Add to favorites'
									name='isFavorite'
									onChange={(e, data) => {
										onChange(e, {
											name: 'isFavorite',
											value: data.checked,
										})
									}}
								/>
								<Button primary type='submit'>
									Submit
								</Button>
							</Form>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid>
		</div>
	)
}

export default CreateContact
