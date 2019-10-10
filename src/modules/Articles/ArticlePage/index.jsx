import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { get } from '../../../lib/network'
import { UserContext } from '../../Common/UserContext'
import EditArticle from '../EditArticle'
import Article from '../Article'

// Styles
const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'center'
	},
	block: {
		width: '45%',
		alignItems: 'top',
		minHeight: '25rem'
	},
})

const ArticlePage = (props) => {
	const classes = useStyles()
	const [user, setUser] = useContext(UserContext)
	const [article, setArticle] = useState({
		title: '',
		content: '',
		tags: []
	})

	useEffect(() => {
		const validUserToken = async () => {
			const res = await get('users/verify')

			if (res.status === 200) {
				setUser({
					logged: true,
					token: res.data.token
				})
			} else {
				setUser({
					logged: false,
					token: ''
				})
			}
		}
		validUserToken()
	}, [])

	return(
		<div className="container">
			<h2>Article page</h2>
			<div className={classes.container}>
				{ user.logged && <EditArticle article={article} setArticle={setArticle} classes={classes}/> }
				<Article article={article} classes={classes} />
			</div>
		</div>
	)
}

export default ArticlePage