import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TextareaAutosize } from '@material-ui/core'
import showdown from 'showdown'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  editor: {

  },
  text: {
    width: '100%',
    minHeight: '14rem',
    fontSize: '1rem',
    border: 'none'
  }
})

const Editor = ({ article, setArticle }) => {
  const [value, setValue] = useState('')
  const classes = useStyles()
  const converter = new showdown.Converter()

  const handleChange = (e) => {
    setValue(e.target.value)
    const html = converter.makeHtml(e.target.value)
    setArticle({
      ...article,
      content: html
    })
  }

  useEffect(() => {
    const md = converter.makeMarkdown(article.content)
    console.log('md ', md)
    setValue(md)
  }, [])

  return (
    <div className='editorContainer'>
      <TextareaAutosize
        className={classes.text}
        placeholder='Write your article here ...'
        // wrap='off'
        value={value}
        // multiline='true'
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
