import { Request, Response } from 'express'
import { insertUser } from '../services/signup-service'

export async function createUser (req: Request, res: Response) {
  const { id, passwd } = req.body

  try {
    const newUser = await insertUser(id, passwd)
    res.status(newUser.code).send({ message:  newUser.message })
  } catch (error) {
    res.status(500).send({ message: 'Erro inesperado, tente novamente mais tarde!' })
  }
}
