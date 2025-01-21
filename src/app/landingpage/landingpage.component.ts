import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [AboutmeComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
