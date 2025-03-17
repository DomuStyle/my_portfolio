import { Component, ViewChild, viewChild, inject } from '@angular/core';
import {Overlay, OverlayModule} from '@angular/cdk/overlay';
// import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { ProjectdetailsComponent } from '../projectdetails/projectdetails.component';
import { CommonModule } from '@angular/common';
import { Project } from './../interfaces/project';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [OverlayModule, ProjectdetailsComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isOverlayOpen = false;

  constructor() {

  }

  projects: Project[] = [
    {
    id: 1,
    title: 'Join',
    description: `
          Task manager inspired by the Kanban System. 
          Create and organize tasks using drag and drop functions, 
          assign users and categories.`,
    img: '/join_project_l.png',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    gitUrl: 'https://github.com/',
    openProjectUrl: 'https://dominik-marnet.de/join'
    },
    {
    id: 2,
    title: 'El Pollo loco',
    description: `
          Jump, run and throw game based on object-oriented approach. 
          Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
    img: 'join_project_l.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    gitUrl: 'https://github.com/',
    openProjectUrl: 'https://dominik-marnet.de/el-pollo-loco'
    },
    {
    id: 3,
    title: 'Pokedex / DaBubble',
    description: `
          This App is a Slack Clone App. 
          It revolutionizes team communication and collaboration with its intuitive interface, 
          real-time messaging, and robust channel organization.`,
    img: 'pokedex_project.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    gitUrl: 'https://github.com/',
    openProjectUrl: 'https://dominik-marnet.de/pokedex'
    }
];

/**
   * Holds the currently selected project for the overlay display.
   * Null when no project is selected.
   */
selectedProject: any = null;
/**
 * Sets the selectedProject to the clicked project, opening the overlay.
 * @param project - The project object clicked by the user.
 */
openOverlay(project: any) {
  this.selectedProject = project;
}

/**
 * Resets selectedProject to null, closing the overlay.
 */
closeOverlay() {
  this.selectedProject = null;
}

getdata(){
  console.log(this.selectedProject.technologies[0]); 
}
}
