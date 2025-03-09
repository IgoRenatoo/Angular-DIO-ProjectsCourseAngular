import { bootstrapApplication } from '@angular/platform-browser'
import { HeaderComponent } from './app/header/header.component'
import { MainComponent } from './app/main/main.component'
import { FooterComponent } from './app/footer/footer.component'


bootstrapApplication(HeaderComponent).catch((err) => console.error(err))
bootstrapApplication(MainComponent).catch((err) => console.error(err))
bootstrapApplication(FooterComponent).catch((err) => console.error(err))
