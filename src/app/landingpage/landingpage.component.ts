import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectdetailsComponent } from '../projectdetails/projectdetails.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [AboutmeComponent, SkillsetComponent, ProjectsComponent, ReferencesComponent, ContactComponent, ProjectdetailsComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
