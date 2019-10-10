import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
	Card,
	CardHeader,
	CardActions,
	Button } from '@material-ui/core'

const AddArticle = ({ classes }) => {
	return(
		<li className={classes.li}>
			<Card>
				<CardHeader title="New article" />
				<CardActions>
					<Link to='/articles/new'>
						<Button>Create</Button>
					</Link>
				</CardActions>
			</Card>
		</li>
	)
}

AddArticle.propTypes = {
	classes: PropTypes.object
}


export default AddArticle