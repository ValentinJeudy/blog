import React from 'react'
import PropTypes from 'prop-types'
// import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

// import 'react-quill/dist/quill.snow.css'
// import './EditArticle.scss'
import Editor from '../Editor'

const EditArticle = ({ article, setArticle, saveArticle, selectedFile, setSelectedFile, classes }) => {
  const setTitle = (e) => {
    setArticle({
      ...article,
      title: e.target.value
    })
  }

  const fileUploadHandler = (e) => {
    if (e.target.files && e.target.files.length) {
      setSelectedFile(e.target.files[0])
      e.target.value = ''
    }
  }

  return (
    <div className={classes.block}>
      <TextField
        className={classes.title}
        label='Title'
        type='text'
        value={article.title}
        onChange={setTitle}
        fullWidth
        variant='outlined'
      />
      <div className={classes.buttonsContainer}>
        <div>
          <span>
            {selectedFile && selectedFile.name}
          </span>
        </div>
        <div className={classes.buttons}>
          <input
            style={{ display: 'none' }}
            accept='image/*'
            id='raised-button-file'
            type='file'
            onChange={fileUploadHandler}
          />
          <label htmlFor='raised-button-file'>
            <Button
              variant='contained'
              color='secondary'
              component='span'
            > Upload
            </Button>
          </label>
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            onClick={saveArticle}
          > Save
          </Button>
        </div>
      </div>
      <div>
        <Editor article={article} setArticle={setArticle} />
      </div>
    </div>
  )
}

EditArticle.propTypes = {
  article: PropTypes.object,
  setArticle: PropTypes.func,
  saveArticle: PropTypes.func,
  selectedFile: PropTypes.object,
  setSelectedFile: PropTypes.func,
  classes: PropTypes.object
}

export default EditArticle
