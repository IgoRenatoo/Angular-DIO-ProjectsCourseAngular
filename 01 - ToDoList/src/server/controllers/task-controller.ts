import { Request, Response } from 'express'
import { createTaskService } from '../services/task-service'

export async function createTaskController ( req: Request, res: Response ) {
  try {
    const { title, description, status } = req.body

    if (!title || !status) {
      res.status(400).send({ message: 'Favor preencher título e status da tarefa.' })
      return
    }
    const result = await createTaskService(title, description, status)

    res.status(result.code).send(result.message)
  } catch (error) {
    res.status(500).send({ message: 'Erro inesperado, tente novamente mais tarde!' })
  }
}
