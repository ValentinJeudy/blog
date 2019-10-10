import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = React.createContext()

export const UserProvider = (props) => {
	const [user, setUser] = useState({
		logged: false,
		token: ''
	})

	return(
		<UserContext.Provider value={[user, setUser]}>
			{ props.children }
		</UserContext.Provider>
	)
}

UserProvider.propTypes = {
	children: PropTypes.element
}