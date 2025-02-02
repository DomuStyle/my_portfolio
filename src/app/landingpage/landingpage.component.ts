import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [AboutmeComponent, SkillsetComponent, ProjectsComponent, ReferencesComponent, ContactComponent, TranslatePipe, TranslateDirective],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
