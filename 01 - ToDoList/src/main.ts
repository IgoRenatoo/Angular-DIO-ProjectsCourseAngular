import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, Route } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { MainComponent } from './app/main/main.component'
import { HomeComponent } from './app/main/home/home.component'
import { AboutComponent } from './app/main/about/about.component'
import { LoginComponent } from './app/main/login/login.component'
import { SignupComponent } from './app/main/signup/signup.component'
import { TaskComponent } from './app/main/task/task.component'
import { authGuard } from './app/guard/auth.guard'

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'tarefas', component: TaskComponent, canActivate: [authGuard] },
  { path: 'sobre', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: SignupComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

bootstrapApplication(MainComponent, { providers: [provideRouter(routes), provideHttpClient()] }).catch(err => console.error(err))
