import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [AboutmeComponent, SkillsetComponent, ProjectsComponent, ContactComponent, TranslatePipe, TranslateDirective, TestimonialComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
