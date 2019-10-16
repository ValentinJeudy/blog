import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { get, put } from 'src/lib/network'
import { UserContext } from 'src/modules/Common/UserContext'
import SnackBar from 'src/modules/Common/SnackBar'
import EditArticle from '../EditArticle'
import Article from '../Article'

// Styles
const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    marginBottom: '1.5rem',
    border: 'none'
  },
  block: {
    width: '45%',
    alignItems: 'top',
    minHeight: '25rem'
  },
  editor: {
    minHeight: '25rem'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1.5rem'
  },
  buttons: {
    width: '15rem',
    textAlign: 'right'
  },
  button: {
    marginLeft: '1.5rem'
  }
})

const ArticlePage = (props) => {
  const classes = useStyles()
  const [user, setUser] = useContext(UserContext)
  const [selectedFile, setSelectedFile] = useState(null)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  })
  const [article, setArticle] = useState({
    _id: '',
    title: '',
    imgName: '',
    content: '',
    tags: []
  })

  const saveArticle = async () => {
    if (selectedFile) {
      const fd = new FormData()
      fd.append('image', selectedFile, selectedFile.name)
      fd.append('article', JSON.stringify(article))
      const headers = { 'Content-Type': 'multipart/form-data' }

      const res = await put('articles', fd, headers)

      if (res.data.success) {
        setArticle({
          ...res.data.article
        })
        setSelectedFile(null)
        setSnackbar({
          open: true,
          message: 'Document has been saved and file uploaded'
        })
      } else {
        console.log('res.data ===> ', res.data)
        setSnackbar({
          open: true,
          message: `Errors: ${res.data.errors}`
        })
      }
    } else {
      const res = await put('articles', { article })

      if (res.status === 200) {
        setSnackbar({
          open: true,
          message: 'Document has been saved !!'
        })
      }
    }
  }

  // Executed when page rendered
  useEffect(() => {
    const validUserToken = async () => {
      const res = await get('api/users/verify')

      if (res.status === 200) {
        setUser({
          logged: true,
          token: res.data.token
        })
      } else {
        setUser({
          logged: false,
          token: ''
        })
      }
    }

    const setProperArticle = () => {
      const locationState = props.history.location.state

      if (props.article) {
        setArticle({
          ...props.article
        })
      } else if (locationState && locationState.article) {
        const data = {
          ...locationState.article
        }

        setArticle(data)
      }
    }

    const setup = async () => {
      await validUserToken()
      setProperArticle()
    }

    setup()
  }, [props.article, props.history.location.state])

  return (
    <div className='container'>
      <h2>Article page</h2>
      <div className={classes.container}>
        {user.logged &&
          <EditArticle
            article={article}
            setArticle={setArticle}
            saveArticle={saveArticle}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            classes={classes}
          />}
        <Article article={article} classes={classes} />
        {snackbar.open && <SnackBar snackbar={snackbar} setSnackbar={setSnackbar} />}
      </div>
    </div>
  )
}

ArticlePage.propTypes = {
  article: PropTypes.object,
  history: PropTypes.object
}

export default ArticlePage
