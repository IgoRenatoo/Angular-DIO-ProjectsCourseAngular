import { Component, inject } from '@angular/core'
import { RouterModule, Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private http = inject(HttpClient)
  private router = inject(Router)
  private authService = inject(AuthService)
  _token = this.authService.token

  userData = {
    username: '',
    password: ''
  }

  onSubmit () {
    const payload = {
      username: this.userData.username,
      password: this.userData.password
    }

    if (this._token()) {
      this.router.navigate(['/tarefas'])
      return alert('logado com sucesso!')
    }

    this.http.post<any>('http://localhost:3000/api/login', payload).subscribe({
      next: (response) => {
        this.authService.setToken(response.content)
        alert(response.message)
        this.router.navigate(['/tarefas'])
      },
      error: (err) => {
        alert(JSON.stringify(err.error.message ?? 'Servidor indisponível!'))
      }
    })
  }

  onLogout () {
    this.authService.removeToken()
    this.router.navigate(['/login'])
    return alert('Deslogado com sucesso!')
  }
}
