import { computed, Injectable, signal } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _token = signal<string | null>(localStorage.getItem('token'))

  token = computed(() => this._token())

  setToken (token: string) {
    localStorage.setItem('token', token)
    this._token.set(token) // Atualiza o signal
  }

  removeToken () {
    localStorage.removeItem('token')
    this._token.set(null) // Atualiza a interface automaticamente
  }
}
