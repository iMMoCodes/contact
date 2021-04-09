import React, { useRef } from 'react'
import { Prompt } from 'react-router'
import { Button, Card, Form, Grid, Header as SemanticHeader, Icon, Image, Select } from 'semantic-ui-react'
import Header from '../../../components/Header'
import countries from '../../../utils/countries'
import './index.css'

const CreateContact = ({ onChange, onSubmit, formIsHalfFilled, loading, formInvalid, onImageChange, tempFile }) => {
	const imagePickRef = useRef(null)

	const chooseImage = () => {
		if (imagePickRef.current) {
			imagePickRef.current.click()
		}
	}

	return (
		<div>
			<Prompt
				when={formIsHalfFilled}
				message={JSON.stringify({
					header: 'Confirm Your Changes',
					content: 'You have unsaved changes, still want to leave?',
				})}
			/>
			<Header />
			<Grid centered>
				<Grid.Column className='form-column'>
					<SemanticHeader style={{ textAlign: 'center' }}>Create Contact</SemanticHeader>
					<Card fluid>
						<Card.Content>
							<Form unstackable>
								<input
									onChange={
										onImageChange
									}
									ref={imagePickRef}
									type='file'
									hidden
								/>
								<div className='image-wrapper'>
									{tempFile && (
										<Image
											className='contact-picture'
											src={
												tempFile
											}
										/>
									)}
									{!tempFile && (
										<div
											onClick={
												chooseImage
											}
											className='contact-picture'
										>
											<span>
												Choose
												a
												picture
											</span>
										</div>
									)}
									<Icon
										name='pencil'
										onClick={
											chooseImage
										}
										className='create-contact-pencil'
									/>
								</div>
								<Form.Group widths={2}>
									<Form.Input
										label='First name'
										name='firstName'
										onChange={
											onChange
										}
										placeholder='First name'
									/>
									<Form.Input
										label='Last name'
										name='lastName'
										onChange={
											onChange
										}
										placeholder='Last name'
									/>
								</Form.Group>
								<Form.Group widths={2}>
									<Form.Input
										label='Country'
										name='countryCode'
										onChange={
											onChange
										}
										control={
											Select
										}
										options={
											countries
										}
										placeholder='Country'
									/>
									<Form.Input
										label='Phone number'
										name='phoneNumber'
										onChange={
											onChange
										}
										placeholder='Phone number'
									/>
								</Form.Group>
								<Form.Checkbox
									label='Add to favorites'
									name='isFavorite'
									onChange={(
										e,
										data
									) => {
										onChange(
											e,
											{
												name:
													'isFavorite',
												value:
													data.checked,
											}
										)
									}}
								/>
								<Button
									disabled={
										formInvalid ||
										loading
									}
									onClick={onSubmit}
									color='green'
									style={{
										width:
											'60%',
										margin:
											'auto',
										display:
											'flex',
										justifyContent:
											'center',
									}}
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
