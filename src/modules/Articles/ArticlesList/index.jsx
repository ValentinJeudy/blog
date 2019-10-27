import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { UserContext } from '../../Common/UserContext'
import AddArticle from '../AddArticle'
import ArticleCard from '../ArticleCard'
import { get } from '../../../lib/network'

// Styles
const useStyles = makeStyles({
  ul: {
    display: 'flex',
    alignItems: 'top',
    flexWrap: 'wrap'
  },
  li: {
    width: 345,
    margin: '1rem'
  },
  cardMedia: {
    height: '10rem'
  }
})

const ArticlesList = () => {
  const [user] = useContext(UserContext)
  const [articles, setArticles] = useState([])
  const classes = useStyles()

  const getArticles = async () => {
    const { data } = await get('api/articles')

    if (data.success) {
      setArticles([...data.articles])
    }
  }

  useEffect(() => {
    console.log('user ===> ', user)
    getArticles()
  }, [])

  return (
    <ul className={`articlesList ${classes.ul}`}>
      {user.logged && <AddArticle classes={classes} />}
      {articles.map((article) => <ArticleCard key={article._id} article={article} classes={classes} />)}
    </ul>
  )
}

export default ArticlesList
