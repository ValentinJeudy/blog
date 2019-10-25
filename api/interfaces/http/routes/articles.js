const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'api/public/uploads')
  },
  filename: (req, file, cb) => {
    // const fileName = `${new Date().toISOString()}-${fie.originalname}`
    const fileName = `${file.originalname}`

    cb(null, fileName)
  }
})

const upload = multer({ storage })

module.exports = ({
  services: {
    articles: articlesService
  },
  log
}) => {
  const router = new express.Router()

  // Find Articles
  router.get('/api/articles', async (req, res, next) => {
    try {
      const response = await articlesService.find()

      if (response && response.success) {
        res.status(200).send(response)
      } else {
        res.status(400).send(response)
      }
    } catch (err) {
      log.error(err)
      res.status(400).send(err.response)
    }
  })

  // Create Article
  router.post('/api/articles', async (req, res, next) => {
    const data = req.body

    try {
      console.log('data ===> ', require('util').inspect(data, { colors: true, depth: 2 }))
      const response = await articlesService.create(data)

      if (response.success) {
        log.info('Article has been created : ', response.article)
        res.status(201).send(response)
      } else {
        res.status(400).send(response)
      }
    } catch (err) {
      log.error(err)
      res.status(400).send(err.response)
    }
  })

  // Update Article
  router.put('/api/articles', upload.single('image'), async (req, res, next) => {
    try {
      const { article } = req.body

      const data = req.file
        ? JSON.parse(article)
        : article

      if (req.file) {
        data.imgName = req.file.filename
      }

      const response = await articlesService.update(data)

      if (response.success) {
        log.info(`Article ${response.article._id} has been updated`)
        res.status(200).send(response)
      } else {
        res.status(400).send(response)
      }
    } catch (err) {
      log.error(err)
      res.status(400).send(err.response)
    }
  })

  return router
}
