import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import image from '../../../uploads/pool.jpg'

const Article = ({ article, classes }) => {
  const [imageStyle, setImageStyle] = useState(null)

  const imgBlockStyle = {
    // backgroundImage: `url("../../../uploads/${article.imgName}")`,
    height: '5rem'
  }

  useEffect(() => {
    const importImage = async () => {
      const { default: importedImage } = await import(`src/uploads/${article.imgName}`)

      console.log('importedImage ===> ', importedImage)

      setImageStyle({
        backgroundImage: `url("${importedImage}")`,
        height: '5rem'
      })
    }

    importImage()
  }, [article.imgName, setImageStyle])

  return (
    <div className={classes.block}>
      <h3>{article.title || 'No Title'}</h3>
      <div style={imageStyle} />
      {article.imgName}
      {/* {article.imgName && <img src={import(`src/uploads/${article.imgName}`)} />} */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.object,
  classes: PropTypes.object
}

export default Article
