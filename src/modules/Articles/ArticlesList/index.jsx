import React, { useState } from 'react'
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	CardMedia,
	Typography
} from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles({
	card: {
		maxWidth: 345,
	}
})

const ArticlesList = (props) => {
	const classes = useStyles()

	return(
		<ul className="articlesList">
			<li>
				<Card className={classes.card}>
					<CardHeader>
						My article
					</CardHeader>
					<CardContent>
						<Typography>
							My article descriptions
						</Typography>
					</CardContent>
				</Card>
			</li>
		</ul>
	)
}

export default ArticlesList