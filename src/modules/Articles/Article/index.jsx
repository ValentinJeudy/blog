import React from 'react'
import PropTypes from 'prop-types'
import { apiConfig } from 'src/lib/config'

const Article = ({ article, classes }) => {
  const imgContainerStyle = {
    height: '10rem',
    backgroundImage: `url("${apiConfig.url}/uploads/${article.imgName}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className={classes.block}>
      <h3>{article.title || 'No Title'}</h3>
      <div style={imgContainerStyle} />
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object,
  classes: PropTypes.object
}

export default Article
