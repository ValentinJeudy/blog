import React, { useEffet, useEffect } from 'react'
import PropTypes from 'prop-types'

const LazyImage = ({ image }) => {
  useEffect(() => {
    console.log('image in lazy ===> ', image)
  }, [])

  return (
    <div>
      <h4>My lazy image</h4>
      <img src={image} alt='' />
    </div>
  )
}

LazyImage.propTypes = {
  image: PropTypes.string
}

export default LazyImage
