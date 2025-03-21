import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private authService = inject(AuthService)
  _token = this.authService.token // Usa o sinal do AuthService
}
