import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import { routes } from './routes/server-routes'

const server = express()

server.use(cors({ origin: 'http://localhost:3000/' }))
server.use(helmet())
server.use(express.json())
server.use('/api', routes)

server.listen(process.env['PORT'], () => console.log('Servidor conectado!') )
