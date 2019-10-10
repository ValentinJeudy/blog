import React, { useState } from 'react'

const Article = ({ article, classes }) => {
	const [] = useState()

	console.log('article.content ===> ', article.content)
	return(
		<div className={classes.block}>
			<h3>{ article.title }</h3>
			{/* { article.content } */}
			<div dangerouslySetInnerHTML={{ __html: article.content }}></div>
		</div>
	)
}

export default Article