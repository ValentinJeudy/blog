import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Article = ({ article, classes }) => {
  const [image, setImage] = useState('')

  const imgStyle = {
    maxWidth: '100%'
  }

  useEffect(() => {
    const loadImage = () => {
      // if (article.imgName) {
      //   import(/* webpackChunkName: "image" */ `../../../../uploads/${article.imgName}`).then((img) => {
      //     setImage(img.default)
      //   })
      // }
      console.log('article.imgName ===> ', article.imgName)

      console.log('image ===> ', image)
    }

    loadImage()
  }, [article.imgName, image, setImage])

  return (
    <div className={classes.block}>
      <h3>{article.title || 'No Title'}</h3>
      {article.imgName && <img src={`http://localhost:7000/uploads/${article.imgName}`} style={imgStyle} />}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object,
  classes: PropTypes.object
}

export default Article
