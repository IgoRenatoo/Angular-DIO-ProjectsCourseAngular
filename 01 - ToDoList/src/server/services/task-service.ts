import db from '../../database/database'
import * as I from '../interfaces/index'

export const createTaskService = async (title: string, description: string, status: string): Promise<I.Return> => {
  try {
    db.execute('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status])
    return { code: 201, message: 'Tarefa registrada com sucesso.' }
  } catch (error: any) {
    console.error(`Erro ao registrar novo usuário: ${error.message}`)
    return { code: 503, message: 'Servidor indisponível, tente novamente mais tarde.' }
  }
}
