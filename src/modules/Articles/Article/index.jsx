import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ article, classes }) => {

	return(
		<div className={classes.block}>
			<h3>{ article.title || 'No Title' }</h3>
			<div dangerouslySetInnerHTML={{ __html: article.content }}></div>
		</div>
	)
}

Article.propTypes = {
	article: PropTypes.object,
	classes: PropTypes.object
}


export default Article