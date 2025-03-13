import db from '../../database/database'
import * as I from '../interfaces/index'
import { verifyPassword } from './hash-service'

export const loginService = async (username: string, password: string): Promise<I.Return> => {
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE name = ?', [username]) as any[]

    if (Array.isArray(rows) && rows.length === 0) {
      return { code: 409, content: `Nome '${username}' não está cadastrado.` }
    }

    const user: I.User = await rows[0]
    const isValid = await verifyPassword(user.password, password)

    if (isValid) {
      return { code: 200, content: 'Usuário logado com sucesso!' }
    } else {
      return { code: 401, content: 'Senha incorreta!' }
    }
  } catch (error: any ) {
    console.error(`Erro ao buscar usuário: ${error.message}`)
    return { code: 503, content: 'Servidor indisponível, tente novamente mais tarde.' }
  }
}
