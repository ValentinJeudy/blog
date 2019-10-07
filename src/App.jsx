import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Header from './modules/Common/Header'
import AuthPage from './modules/Auth/AuthPage'
import './App.scss'

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
			<Router>
				<Header />
				<Route
					path="/login"
					component={AuthPage} />
			</Router>
		</MuiThemeProvider>
	)
}

export default App
