import React from 'react'
import { Button, Form, Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import Header from '../../components/Header/index'

const RegisterUI = () => {
	return (
		<div>
			<Header />
			<Grid centered>
				<Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
					<SemanticHeader>Sign up</SemanticHeader>
					<Segment>
						<Form>
							<Form.Field>
								<Form.Input
									placeholder='Username'
									label='Username'
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									placeholder='First Name'
									label='First Name'
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									placeholder='Last Name'
									label='Last Name'
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									type='email'
									placeholder='Email'
									label='Email'
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									type='password'
									placeholder='Password'
									label='Password'
								/>
							</Form.Field>
							<Button
								primary
								fluid
								type='submit'
							>
								Submit
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	)
}

export default RegisterUI
