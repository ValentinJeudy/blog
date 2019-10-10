import React from 'react'
import PropTypes from 'prop-types'
import {
	Card,
	CardHeader,
	CardContent,
	// CardActions,
	// CardMedia,
	Typography
} from '@material-ui/core'

const ArticleCard = ({ classes }) => {

	return(
		<li className={classes.li}>
			<Card >
				<CardHeader>
					<Typography>
						My article
					</Typography>
				</CardHeader>
				<CardContent>
					<Typography>
						My article descriptions
					</Typography>
				</CardContent>
			</Card>
		</li>
	)
}

ArticleCard.propTypes = {
	classes: PropTypes.object
}

export default ArticleCard