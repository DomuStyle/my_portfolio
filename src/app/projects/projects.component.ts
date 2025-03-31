import { Component, ViewChild, viewChild, inject } from '@angular/core';
import {Overlay, OverlayModule} from '@angular/cdk/overlay';
// import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Project } from './../interfaces/project';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [OverlayModule, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isOverlayOpen = false;

  constructor(private translate: TranslateService) {}
  switchLang(language: string) {
    this.translate.use(language);
  }

  projects: Project[] = [
    {
    id: 1,
    title: 'Join',
    description: 'portfolio-Overlay.textJoin',
    img: './assets/img/projects/join_project_l.png',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    gitUrl: 'https://github.com/PhilscheLogik/Join/',
    openProjectUrl: 'https://dominik-marnet.de/join',
    techImgs: [
      './assets/img/overlay/technologies/overlay-angular.svg',
      './assets/img/overlay/technologies/overlay-ts.svg',
      './assets/img/overlay/technologies/overlay-html.svg',
      './assets/img/overlay/technologies/overlay-css.svg',
      './assets/img/overlay/technologies/overlay-firebase.svg',
    ]
    },
    {
    id: 2,
    title: 'El Pollo loco',
    description: 'portfolio-Overlay.textElPolloLoco',
    img: './assets/img/projects/pollo-loco-snapshot (1).png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    gitUrl: 'https://github.com/DomuStyle/El-Pollo-Loco',
    openProjectUrl: 'https://dominik-marnet.de/el-pollo-loco',
    techImgs: [
      './assets/img/overlay/technologies/overlay-js.svg',
      './assets/img/overlay/technologies/overlay-html.svg',
      './assets/img/overlay/technologies/overlay-css.svg',
    ]
    },
    {
    id: 3,
    title: 'DABubble',
    description: 'portfolio-Overlay.textDABubble',
    img: './assets/img/projects/da_bubble_project.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    gitUrl: 'https://github.com/',
    openProjectUrl: 'https://dominik-marnet.de/pokedex',
    techImgs: [
      './assets/img/overlay/technologies/overlay-js.svg',
      './assets/img/overlay/technologies/overlay-html.svg',
      './assets/img/overlay/technologies/overlay-css.svg',
    ]
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

nextProject() {
  if (!this.selectedProject) return;

  // Find the index of the current selected project
  const currentIndex = this.projects.findIndex(
    (p) => p.id === this.selectedProject!.id
  );

  // Calculate the next index, looping back to 0 if at the end
  const nextIndex = (currentIndex + 1) % this.projects.length;

  // Set the next project as the selected project
  this.selectedProject = this.projects[nextIndex];
}

// getdata(){
//   console.log(this.selectedProject.technologies[0]); 
// }
}
