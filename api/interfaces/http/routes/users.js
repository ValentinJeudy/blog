const express = require('express')

module.exports = ({
  services: {
    users: usersService
  },
  logger
}) => {
  const router = new express.Router()

  router.get('/api/users', async (req, res, next) => {
    console.log('usersService ===> ', require('util').inspect(usersService, { colors: true, depth: 2 }))
  })

  return router
}
