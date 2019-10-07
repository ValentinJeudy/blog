const pino = require('pino')
const isDev = process.env.NODE_ENV === 'development'

console.log('process.env.NODE_ENV ===> ', process.env.NODE_ENV)
const logger = ({
  name = 'blog',
  level = 'info',
  enabled = true,
  destination = '/dev/stderr'
} = {}) => {
  console.log('isDev ===> ', require('util').inspect(isDev, { colors: true, depth: 2 }))
  const pinoLogger = pino({
    name,
    level,
    enabled,
    useLevelLabels: true,
    ...isDev ? { prettyPrint: { colorize: true } } : {}
  }, pino.destination(destination))

  // TODO setup or remove
  // return {
  //   debug: pinoLogger.debug,
  //   info: pinoLogger.info,
  //   warn: pinoLogger.warn,
  //   error: pinoLogger.error,
  //   fatal: pinoLogger.fatal,
  //   child: pinoLogger.child,
  // }

  return pinoLogger
}

module.exports = logger
