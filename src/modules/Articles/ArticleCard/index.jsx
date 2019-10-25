import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardContent,
  // CardActions,
  CardMedia,
  Typography
} from '@material-ui/core'

import { apiConfig } from 'src/lib/config'

const ArticleCard = ({ article, classes }) => {
  return (
    <li className={classes.li}>
      <Link to={{
        pathname: `/articles/${article._id}`,
        state: {
          article
        }
      }}
      >
        <Card>
          <CardMedia
            className={classes.cardMedia}
            image={`${apiConfig.url}/uploads/${article.imgName}`}
            title='Contemplative Reptile'
          />
          <CardHeader title={article.title || 'No Title'} />
        </Card>
      </Link>
    </li>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object,
  classes: PropTypes.object
}

export default ArticleCard
