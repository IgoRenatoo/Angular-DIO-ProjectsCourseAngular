import db from '../../database/database'
import * as I from '../interfaces/index'

export const signupService = async (username: string, password: string): Promise<I.Return> => {
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE name = ?', [username])

    if (Array.isArray(rows) && rows.length > 0) {
      return { code: 409, message: `Nome '${username}' já está em uso.` }
    }

    const insertQuery = 'INSERT INTO users (name, password) VALUES (?, ?)'
    await db.execute(insertQuery, [username, password])

    return { code: 201, message: `Usuário '${username}' registrado com sucesso.` }
  } catch (error: any ) {
    console.error(`Erro ao registrar novo usuário: ${error.message}`)
    return { code: 503, message: 'Servidor indisponível, tente novamente mais tarde.' }
  }
}
