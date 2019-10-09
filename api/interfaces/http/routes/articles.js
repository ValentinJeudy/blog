const express = require('express')

module.exports = ({
  services: {
    articles: articlesService
  },
  log
}) => {
  const router = new express.Router()

  router.get('/api/articles', async (req, res, next) => {
    try {
      const articles = await articlesService.find()

      if (articles && articles.length) {
        res.status(200).send({ articles })
      }
    } catch (err) {
      log.error(err)
      res.status(400).send(err)
    }
  })

  router.post('/api/articles', async (req, res, next) => {
    const data = req.body

    try {
      const user = await articlesService.create(data)

      log.info('User created :   ', user)

      if (user) {

      }
      res.status(201).send('User has been successfully created : ', user.username)
    } catch (err) {
      log.error(err)
      res.status(400).send(err)
    }
  })

  return router
}
