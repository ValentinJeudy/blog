import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton, Input } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import './styles.scss'

const useStyles = makeStyles({
  editor: {

  },
  text: {
    width: '100%',
    minHeight: '14rem'
  }
})

const Editor = ({ article, setArticle }) => {
  const classes = useStyles()

  const handleChange = (value) => {
    console.log('value ===> ', value)
  }

  return (
    <div className='editorContainer'>
      <Input
        className={classes.text}
        multiline='true'
        // type='text'
        onChange={handleChange}
      />
    </div>
  )
}

Editor.propTypes = {
  article: PropTypes.object,
  setArticle: PropTypes.func
}

export default Editor
