import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

const LoginForm = (props) => {
	const [form, setForm] = useState({
		pseudo: '',
		password: ''
	})

	return(
		<form>
			<TextField />
			{/* <label>
        Password
				<input type="text"/>
			</label> */}
		</form>
	)
}

export default LoginForm