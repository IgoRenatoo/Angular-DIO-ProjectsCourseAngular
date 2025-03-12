import db from '../../database/database'

export const insertUser = async (name: string, password: string) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE name = ?', [name])
    if (Array.isArray(rows) && rows.length > 0) {
      return { code: 409, message: `Nome '${name}' já está em uso.` }
    }

    const insertQuery = 'INSERT INTO users (name, passwd) VALUES (?, ?)'
    await db.execute(insertQuery, [name, password])

    return { code: 201, message: `Usuário '${name}' registrado com sucesso.` }
  } catch (error) {
    return { code: 503, message: 'Servidor indisponível, tente novamente mais tarde.' }
  }
}
