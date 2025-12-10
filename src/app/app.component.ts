import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/components/header/header.component';
import { AboutComponent } from './component/components/about/about.component';
import { ContactComponent } from './component/components/contact/contact.component';
import { ExperienceComponent } from './component/components/experience/experience.component';
import { ProjectsComponent } from './component/components/projects/projects.component';
import { SkillsComponent } from './component/components/skills/skills.component';
import { UserComponent } from './component/components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatbotComponent } from './component/components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
    ReactiveFormsModule,
  ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'port-folio';
}
