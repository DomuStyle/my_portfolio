import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from './../interfaces/project';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-projectdetails',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  templateUrl: './projectdetails.component.html',
  styleUrl: './projectdetails.component.scss'
})
export class ProjectdetailsComponent {

  isOverlayOpen = false;

  currentItem = 'id';

  @Input() projects!: Project;

  toggleOverlay() {
    // Toggle overlay visibility
    this.isOverlayOpen = !this.isOverlayOpen;
  }

  closeOverlay(event?: MouseEvent) {
    // Close overlay if clicked outside content or on close button
    if (!event || event.target === event.currentTarget) {
      this.isOverlayOpen = false;
    }
  }

  nextItem() {
    // Cycle through items using keys
    const keys = Object.keys(this.projects);
    const index = keys.indexOf(this.currentItem);
    this.currentItem = keys[(index + 1) % keys.length];
  }
}
