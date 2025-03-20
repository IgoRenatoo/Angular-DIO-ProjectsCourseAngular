import { Component, inject } from '@angular/core'
import { RouterLink, Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private http = inject(HttpClient)
  private router = inject(Router)
  isInvalid = false
  userData = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  onSubmit () {
    if (this.userData.password !== this.userData.confirmPassword) {
      this.isInvalid = true
      this.userData.password = ''
      this.userData.confirmPassword = ''
      return
    }
    const payload = {
      username: this.userData.username,
      password: this.userData.password
    }
    this.http.post<any>('http://localhost:3000/api/signup', payload).subscribe({
      next: (response) => {
        alert(JSON.stringify(response.content))
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.error('Erro no cadastro:', err)
        alert(`Erro ao realizar cadastro. ${err.error.content}`)
      }
    })
  }
}
