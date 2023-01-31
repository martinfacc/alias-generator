import log4js from 'log4js'

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs.log' } },
  categories: { default: { appenders: ['cheese'], level: 'all' } }
})

const logger = log4js.getLogger('logger')

export default logger
