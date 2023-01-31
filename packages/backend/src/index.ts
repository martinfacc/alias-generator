import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import logger from './logger'
dotenv.config()

const { APP_PORT = '4000' } = process.env
const FRONT_PATH = '../../frontend/dist'

const app = express()

app.use(express.static(path.join(__dirname, FRONT_PATH)))

app.get('/*', (_, response) => {
  response.sendFile(path.join(__dirname, FRONT_PATH, 'index.html'))
})

app.listen(APP_PORT, async () => {
  try {
    console.log(`Server is running on http://localhost:${APP_PORT}`)
    logger.info('Server is running')
  } catch (error) {
    console.log(error)
    logger.error(error)
  }
})
