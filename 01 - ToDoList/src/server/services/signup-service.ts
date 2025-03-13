import db from '../../database/database'

interface IReturn {
  code: number
  content: string
}

export const createUserService = async (username: string, password: string): Promise<IReturn> => {
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE name = ?', [username])

    if (Array.isArray(rows) && rows.length > 0) {
      return { code: 409, content: `Nome '${username}' já está em uso.` }
    }

    const insertQuery = 'INSERT INTO users (name, password) VALUES (?, ?)'
    await db.execute(insertQuery, [username, password])

    return { code: 201, content: `Usuário '${username}' registrado com sucesso.` }
  } catch (error: any ) {
    console.error(`Erro ao registrar novo usuário: ${error.message}`)
    return { code: 503, content: 'Servidor indisponível, tente novamente mais tarde.' }
  }
}
