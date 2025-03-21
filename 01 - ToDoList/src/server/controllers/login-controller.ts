import { Request, Response } from 'express'
import { loginService } from '../services/login-service'

export async function loginController (req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(400).send({ message: 'Nome e senha são obrigatórios.' })
      return
    }

    const result = await loginService(username, password)
    res.status(result.code).send({ message: result.message , content: result.content })
  } catch (error) {
    res.status(500).send({ message: 'Erro inesperado, tente novamente mais tarde!' })
  }
}
