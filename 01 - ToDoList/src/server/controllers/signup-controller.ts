import { Request, Response } from 'express'
import { signupService } from '../services/signup-service'
import { hashPassword } from '../services/hash-service'

export async function signupController (req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(400).send({ message: 'Nome e senha são obrigatórios.' })
      return
    }
    const hash = await hashPassword(password)
    const result = await signupService(username, hash)
    res.status(result.code).send({ message: result.message })
  } catch (error) {
    res.status(500).send({ message: 'Erro inesperado, tente novamente mais tarde!' })
  }
}
