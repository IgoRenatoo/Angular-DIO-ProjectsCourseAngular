import argon2 from 'argon2'

const argon2Config: argon2.Options = {
  type: argon2.argon2id, // Algoritmo mais seguro
  memoryCost: 2 ** 16, // Consome ~64MB de RAM para dificultar ataques
  timeCost: 3, // Número de iterações (quanto maior, mais seguro)
  parallelism: 1 // Paralelismo (padrão: 1)
}

// Usado na criação de usuário para registrar senha no database
export const hashPassword = async (password: string): Promise<string> => await argon2.hash(password, argon2Config)

// Usado na tentativa de login
export const verifyPassword = async (hash: string, password: string): Promise<boolean> => await argon2.verify(hash, password)
