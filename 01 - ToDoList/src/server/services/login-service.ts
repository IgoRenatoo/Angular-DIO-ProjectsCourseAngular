import db from '../../database/database'
import * as I from '../interfaces/index'
import { verifyPassword } from './hash-service'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const loginService = async (username: string, password: string): Promise<I.Return> => {
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE name = ?', [username]) as any[]

    if (Array.isArray(rows) && rows.length === 0) {
      return { code: 409, message: `Nome '${username}' não está cadastrado.` }
    }

    const user: I.User = await rows[0]
    const isValid = await verifyPassword(user.password, password)

    if (isValid && process.env['JWT_SECRET']) {
      const token = jwt.sign({ username: username, password: password }, process.env['JWT_SECRET'], { expiresIn: '1h' })

      return { code: 200, message: 'Usuário logado com sucesso!', content: token }
    } else {
      return { code: 401, message: 'Senha incorreta!' }
    }
  } catch (error: any ) {
    console.error(`Erro ao buscar usuário: ${error.message}`)
    return { code: 503, message: 'Servidor indisponível, tente novamente mais tarde.' }
  }
}
