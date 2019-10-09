const express = require('express')

module.exports = ({
  services: {
    users: usersService
  },
  log
}) => {
  const router = new express.Router()

  router.get('/api/users', async (req, res, next) => {
    console.log('usersService ===> ', require('util').inspect(usersService, { colors: true, depth: 2 }))
  })

  router.post('/api/users', async (req, res, next) => {
    const data = req.body

    try {
      const response = await usersService.create(data)

      if (response.success) {
        res.status(201).send(response)
      } else {
        res.status(400).send(response)
      }
    } catch (err) {
      log.error(err)
      res.status(400).send(err)
    }
  })

  router.post('/api/login', async (req, res, next) => {
    try {
      const data = req.body

      console.log('=============> HERE <================')

      const token = await usersService.login(data)
      console.log('token ===> ', token)

      if (token) {
        res.status(200).send(token)
      } else {
        console.log('=============> Auth failed <================')
        res.status(400).send('Auth failed')
      }
    } catch (err) {
      log.error(err)
    }
  })

  return router
}
