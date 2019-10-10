import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import './App.scss'

import Header from './modules/Common/Header'
import HomePage from './modules/Common/HomePage'
import AuthPage from './modules/Auth/AuthPage'
import ArticlePage from './modules/Articles/ArticlePage'

import { UserProvider } from './modules/Common/UserContext'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1a237e',
		},
		secondary: {
			main: '#00838f',
		},
	},
})

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<UserProvider>
				<Router>
					<Header />
					<Route
						path="/"
						exact
						component={HomePage} />
					<Route
						path="/login"
						component={AuthPage} />
					<Route
						path="/articles/:id"
						component={ArticlePage} />
				</Router>
			</UserProvider>
		</MuiThemeProvider>
	)
}

export default App
