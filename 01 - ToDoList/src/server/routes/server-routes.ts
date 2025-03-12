import { Router } from 'express'
import { createUser } from '../controllers/signup-controller'

export const routes = Router()

routes.get('/', createUser)
