import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import { post } from '../../../lib/network'

import { UserContext } from '../../Common/UserContext'

// styles
// const textFieldStyle = {
// 	width: '100%'
// }

const buttonStyle = {
  marginTop: '1rem',
  float: 'right'
}

const LoginForm = (props) => {
  const [user, setUser] = useContext(UserContext)

  const history = useHistory()
  const [form, setForm] = useState({
    username: {
      field: 'Val',
      error: false,
      msg: ''
    },
    password: {
      field: 'Shred4618',
      error: false,
      msg: ''
    }
  })

  const authUser = async () => {
    const isFormValid = validateFields()

    if (isFormValid) {
      const data = {
        username: form.username.field,
        password: form.password.field
      }

      const res = await post('api/login', data)

      if (res.status === 200) {
        const date = new Date()
        date.setDate(date.getDate() + 1)
        document.cookie = `blog-token=${res.data.token}; expires=${date}.`
        setUser({
          logged: true,
          token: res.data.token
        })
        history.push('/')
      }
    }
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

    const newForm = Object.keys(form).reduce((acc, name) => {
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

  return (
    <form>
      <h1>{user.token}</h1>
      <TextField
        label='Username'
        type='text'
        required
        error={form.username.error}
        helperText={form.username.msg}
        value={form.username.field}
        onChange={handleChange('username')}
        fullWidth
      />
      <br />
      <TextField
        label='Password'
        type='password'
        required
        error={form.password.error}
        helperText={form.password.msg}
        value={form.password.field}
        onChange={handleChange('password')}
        fullWidth
      />
      <Button
        variant='contained'
        color='secondary'
        onClick={authUser}
        style={buttonStyle}
      >
				Login
      </Button>
    </form>
  )
}

export default LoginForm
