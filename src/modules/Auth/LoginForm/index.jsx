import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

// styles
const textFieldStyle = {
	width: '100%'
}

const buttonStyle = {
	marginTop: '1rem',
	float: 'right'
}

const LoginForm = (props) => {
	const [form, setForm] = useState({
		pseudo: '',
		password: ''
	})

	const logUser = () => {

	}

	return(
		<form>
			<TextField
				style={textFieldStyle}
				label="Name"
				type="text"
				autoComplete="current-password"
				margin="normal"
			/>
			<br/>
			<TextField
				style={textFieldStyle}
				label="Password"
				type="password"
				autoComplete="current-password"
				margin="normal"
			/>
			<Button
				variant="contained"
				color="secondary"
				onClick={}
				style={buttonStyle}>
				Login
			</Button>
		</form>
	)
}

export default LoginForm