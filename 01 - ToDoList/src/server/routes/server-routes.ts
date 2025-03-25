import { Router } from 'express'
import * as access from '../controllers/index'

export const routes = Router()

routes.post('/signup', access.signupController)
routes.post('/login', access.loginController)

routes.post('/task', access.createTaskController)
