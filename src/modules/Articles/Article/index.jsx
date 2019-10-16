import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import LazyImage from 'src/modules/Common/LazyImage'

const Article = ({ article, classes }) => {
  const [image, setImage] = useState('')

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
      {article.imgName}
      {article.imgName && <img src={`http://localhost:7000/uploads/${article.imgName}`} />}
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
