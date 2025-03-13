import argon2 from 'argon2'

const argon2Config: argon2.Options = {
  type: argon2.argon2id, // Algoritmo mais seguro
  memoryCost: 2 ** 16, // Consome ~64MB de RAM para dificultar ataques
  timeCost: 3, // Número de iterações (quanto maior, mais seguro)
  parallelism: 1 // Paralelismo (padrão: 1)
}

export const hashPassword = async (password: string) => await argon2.hash(password, argon2Config)
