import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import LazyImage from 'src/modules/Common/LazyImage'

const Article = ({ article, classes }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    const loadImage = () => {
      if (article.imgName) {
        import(/* webpackChunkName: "image" */ `../../../../uploads/${article.imgName}`).then((img) => {
          setImage(img.default)
        })
      }
    }

    loadImage()
  }, [article.imgName, image, setImage])

  return (
    <div className={classes.block}>
      <h3>{article.title || 'No Title'}</h3>
      {article.imgName}
      {image && <img src={image} />}
      {/* {image.length && <LazyImage image={image} />} */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object,
  classes: PropTypes.object
}

export default Article
