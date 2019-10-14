import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Snackbar, IconButton, Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const SnackBar = ({ snackbar, setSnackbar }) => {

	const handleClose = () => {
		setSnackbar({
			open: false,
			message: ''
		})
	}

	return(
		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={snackbar.open}
			autoHideDuration={3000}
			onClose={handleClose}
			// ContentProps={{
			// 	'aria-describedby': 'message-id',
			// }}
			message={snackbar.message}
			action={[
				<IconButton
					key="close"
					aria-label="close"
					color="inherit"
					onClick={handleClose}
				>
					<Close />
				</IconButton>,
			]}
		/>
	)
}

SnackBar.propTypes = {
	snackbar: PropTypes.object,
	setSnackbar: PropTypes.func
}


export default SnackBar