import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { MainComponent } from './app/main/main.component'
import { HomeComponent } from './app/main/home/home.component'
import { AboutComponent } from './app/main/about/about.component'
import { LoginComponent } from './app/main/login/login.component'
import { SignupComponent } from './app/main/signup/signup.component'
import { TaskComponent } from './app/main/task/task.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'tarefas', component: TaskComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: SignupComponent }
]

bootstrapApplication(MainComponent, { providers: [provideRouter(routes)] }).catch(err => console.error(err))
