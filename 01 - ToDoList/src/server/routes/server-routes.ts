import { Router } from 'express'
import * as access from '../controllers/index'

export const routes = Router()

routes.post('/signup', access.signupController)
routes.get('/login', access.loginController)
