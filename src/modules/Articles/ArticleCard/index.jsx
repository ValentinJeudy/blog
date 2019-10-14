import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
	Card,
	CardHeader,
	CardContent,
	// CardActions,
	// CardMedia,
	Typography
} from '@material-ui/core'

const ArticleCard = ({ article, classes }) => {

	return(
		<li className={classes.li}>
			<Link to={{
				pathname: `/articles/${article._id}`,
				state: {
					article
				}}
			}>
				<Card >
					<CardHeader title={ article.title || 'No Title' } />
					<CardContent>
						<Typography>
							{ article.content || 'No Content'}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</li>
	)
}

ArticleCard.propTypes = {
	article: PropTypes.object,
	classes: PropTypes.object
}

export default ArticleCard