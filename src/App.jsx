import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './modules/Common/Header'
import AuthPage from './modules/Auth/AuthPage'

import './App.scss'

const App = () => {
	return (
		<Router>
			<Header />
			<Route
				path="/login"
				component={AuthPage} />
		</Router>
	)
}

export default App
