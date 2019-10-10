import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditArticle = ({article, setArticle, classes}) => {

	const handleChange= (updatedContent) => {
		setArticle({
			title: article.title,
			content: updatedContent,
			tags: article.tags
		})
	}

	return(
		<ReactQuill className={classes.block} value={article.content}
			onChange={handleChange} />
	)
}

EditArticle.propTypes = {
	article: PropTypes.object,
	setArticle: PropTypes.object,
	classes: PropTypes.object
}

export default EditArticle