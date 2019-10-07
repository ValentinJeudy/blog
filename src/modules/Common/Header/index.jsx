import React from 'react'
import { Link } from 'react-router-dom'
import {
	AppBar,
	Button,
	Toolbar,
	Typography } from '@material-ui/core'

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar style={ToolbarStyle}>
				<Link to="/">
					<Typography variant="h5">
						Home
					</Typography>
				</Link>
				<Link to="/login">
					<Button color="inherit">Login</Button>
				</Link>
			</Toolbar>
		</AppBar>
	)
}

// Styles
const ToolbarStyle = {
	justifyContent: 'space-between'
}

export default Header