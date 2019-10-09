const config = require('config')

const http = require('../interfaces/http')
const logger = require('../infra/logger')()
// Services
const usersServices = require('./services/users')
const articlesServices = require('./services/articles')

// Infra
const database = require('../infra/mongodb')
const usersRepository = require('../infra/mongodb/UsersRepository')
const articlesRepository = require('../infra/mongodb/articlesRepository')
const jwt = require('../infra/jwt')
const encrypt = require('../infra/encryption')

const startApp = async () => {
  const client = await database.connect(config.dbConfig)

  http.start({
    config,
    database: client,
    log: logger,
    services: {
      users: usersServices({
        repository: usersRepository(database.db()),
        encrypt,
        jwt: jwt(config),
        log: logger
      }),
      articles: articlesServices({
        repository: articlesRepository(database.db()),
        jwt: jwt(config),
        log: logger
      })
    }
  })
}

startApp()
