import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import './App.css'
import routes from './routes'
import 'semantic-ui-css/semantic.min.css'
import { GlobalProvider } from './context/Provider'
import isAuthenticated from './utils/isAuthenticated'
import UserLeaveConfirmation from './components/UserLeaveConfirmation'

const RenderRoute = (route) => {
	const history = useHistory()

	document.title = route.title || 'iMMoContacts'

	if (route.needsAuth && !isAuthenticated()) {
		history.push('/auth/login')
	}
	return <Route path={route.path} exact render={(props) => <route.component {...props} />}></Route>
}

function App() {
	const [confirmOpen, setConfirmOpen] = useState(true)

	return (
		<GlobalProvider>
			<Router
				getUserConfirmation={(message, callback) => {
					return UserLeaveConfirmation(message, callback, confirmOpen, setConfirmOpen)
				}}
			>
				<Switch>
					{routes.map((route, index) => (
						<RenderRoute {...route} key={index} />
					))}
				</Switch>
			</Router>
		</GlobalProvider>
	)
}

export default App
