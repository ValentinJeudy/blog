import React from 'react'
import { Typography } from '@material-ui/core'
import LoginForm from '../LoginForm'

// styles
const authPageStyle = {
	display: 'flex',
	justifyContent: 'center',
}

const containerStyle = {
	width: '20rem'
}

const titleStyle = {
	margin: '1rem 0'
}

const AuthPage = () => {
	return(
		<div className="authPage" style={authPageStyle}>
			<div className="authPage-container" style={containerStyle}>
				<Typography variant="h5" style={titleStyle}>
					Sign in
				</Typography>
				<LoginForm />
			</div>
		</div>
	)
}

export default AuthPage