import { Request, Response } from 'express'
import { createUserService } from '../services/signup-service'
import { hashPassword } from '../services/hash-service'

export async function createUserController (req: Request, res: Response): Promise<void> {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(400).send({ content: 'Nome e senha são obrigatórios.' })
      return
    }
    const hash = await hashPassword(password)
    const result = await createUserService(username, hash)
    res.status(result.code).send({ content:  result.content })
  } catch (error) {
    res.status(500).send({ content: 'Erro inesperado, tente novamente mais tarde!' })
  }
}
