const config = require('config')

const http = require('../interfaces/http')
const logger = require('../infra/logger')()
const usersServices = require('./services/users')
const database = require('../infra/mongodb')
const usersRepository = require('../infra/mongodb/UsersRepository')

const startApp = async () => {
  const client = await database.connect(config.dbConfig)

  http.start({
    config,
    database: client,
    logger,
    services: {
      users: usersServices({
        repository: usersRepository(database.db())
      })
    }
  })
}

startApp()
