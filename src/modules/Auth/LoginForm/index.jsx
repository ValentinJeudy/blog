import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

// styles
// const textFieldStyle = {
// 	width: '100%'
// }

const buttonStyle = {
	marginTop: '1rem',
	float: 'right'
}

const LoginForm = (props) => {
	const [form, setForm] = useState({
		username: {
			field: '',
			error : false,
			msg: ''
		},
		password: {
			field: '',
			error: false,
			msg: ''
		}
	})

	const authUser = (e) => {

		const isFormValid = validateFields()

		console.log('isFormValid ===> ', isFormValid)
	}

	const handleChange = (name) => ({ target: { value } }) => {
		setForm({
			...form,
			[name]: {
				field: value,
				error: false,
				msg: ''
			}
		})
	}

	const validateFields = () => {
		let isValid = true

		const newForm = Object.keys(form).reduce((acc, name)=> {
			if (!form[name].field.length) {
				isValid = false
				return	{
					...acc,
					[name]: {
						field: form[name].field,
						error: true,
						msg: 'This field cannot be empty'
					}
				}
			} else {
				return {
					...acc,
					[name]: form[name]
				}
			}
		}, {})

		setForm(newForm)

		return isValid
	}

	return(
		<form>
			<TextField
				label="Username"
				type="text"
				required={true}
				error={form.username.error}
				helperText={form.username.msg}
				value={form.username.field}
				onChange={handleChange('username')}
				fullWidth={true}
			/>
			<br/>
			<TextField
				label="Password"
				type="password"
				required={true}
				error={form.password.error}
				helperText={form.password.msg}
				value={form.password.field}
				onChange={handleChange('password')}
				fullWidth={true}
			/>
			<Button
				variant="contained"
				color="secondary"
				onClick={authUser}
				style={buttonStyle}>
				Login
			</Button>
		</form>
	)
}

export default LoginForm