import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { UserContext } from '../../Common/UserContext'
import AddArticle from '../AddArticle'
import ArticleCard from '../ArticleCard'

// Styles
const useStyles = makeStyles({
	ul: {
		display: 'flex',
		alignItems: 'top'
	},
	li: {
		maxWidth: 345,
		margin: '1rem'
	}
})

const ArticlesList = () => {
	const [user] = useContext(UserContext)
	const classes = useStyles()

	return(
		<ul className={`articlesList ${classes.ul}`}>
			{ user.logged && <AddArticle classes={classes} /> }
			<ArticleCard classes={classes} />
		</ul>
	)
}

export default ArticlesList