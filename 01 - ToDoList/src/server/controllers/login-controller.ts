import { Request, Response } from 'express'
import { loginService } from '../services/login-service'

export async function loginController (req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(400).send({ content: 'Nome e senha são obrigatórios.' })
      return
    }

    const result = await loginService(username, password)
    res.status(result.code).send({ content: result.content })
  } catch (error) {
    res.status(500).send({ content: 'Erro inesperado, tente novamente mais tarde!' })
  }
}
