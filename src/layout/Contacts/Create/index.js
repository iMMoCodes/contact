import React from 'react'
import { Button, Card, Form, Grid, Header as SemanticHeader, Select } from 'semantic-ui-react'
import Header from '../../../components/Header'
import countries from '../../../utils/countries'
import './index.css'

const CreateContact = ({ onChange, onSubmit, loading, formInvalid }) => {
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
										control={Select}
										options={countries}
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
								<Button
									disabled={formInvalid || loading}
									onClick={onSubmit}
									primary
									type='submit'
									loading={loading}
								>
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
