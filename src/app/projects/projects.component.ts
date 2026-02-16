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
    title: 'Coderr/',
    description: 'portfolio-Overlay.textCoderr',
    img: './assets/img/projects/coderr_small.png',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    gitUrl: 'https://github.com/DomuStyle/Coderr_BE',
    openProjectUrl: 'https://www.coderr.dominik-marnet.de',
    techImgs: [
      './assets/svg/projects/overlay/python.svg',
      './assets/svg/projects/overlay/django.svg',
      './assets/svg/projects/overlay/postgre_sql.svg',
    ]
    },
    {
    id: 2,
    title: 'Join',
    description: 'portfolio-Overlay.textJoin',
    img: './assets/img/projects/join_project_l.png',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    gitUrl: 'https://github.com/PhilscheLogik/Join/',
    openProjectUrl: 'https://www.join.dominik-marnet.de',
    techImgs: [
      './assets/img/overlay/technologies/overlay-angular.svg',
      './assets/img/overlay/technologies/overlay-ts.svg',
      './assets/img/overlay/technologies/overlay-html.svg',
      './assets/img/overlay/technologies/overlay-css.svg',
      './assets/img/overlay/technologies/overlay-firebase.svg',
    ]
    },
    {
    id: 3,
    title: 'El Pollo loco',
    description: 'portfolio-Overlay.textElPolloLoco',
    img: './assets/img/projects/pollo-loco-snapshot (1).png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    gitUrl: 'https://github.com/DomuStyle/El-Pollo-Loco',
    openProjectUrl: 'https://www.el-pollo-loco.dominik-marnet.de',
    techImgs: [
      './assets/img/overlay/technologies/overlay-js.svg',
      './assets/img/overlay/technologies/overlay-html.svg',
      './assets/img/overlay/technologies/overlay-css.svg',
    ]
    },
    {
    id: 4,
    title: 'Pokedex',
    description: 'portfolio-Overlay.textPokedex',
    img: './assets/img/projects/pokedex_project_l.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Gemini-API'],
    gitUrl: 'https://github.com/pokedex',
    openProjectUrl: 'https://www.pokedex.dominik-marnet.de',
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


// /**
//  * Resets selectedProject to null, closing the overlay.
//  */
// closeOverlay() {
//   this.selectedProject = null;
// }

 /**
   * Opens the overlay by setting the selected project and prevents body scrolling.
   * @param project - The project object clicked by the user.
   */
 openOverlay(project: Project) {
  this.selectedProject = project;
  // Prevent background scrolling by setting body overflow to hidden
  document.body.style.overflow = 'hidden';
}

/**
   * Closes the overlay by resetting selectedProject and restores body scrolling.
   */
closeOverlay() {
  this.selectedProject = null;
  // Restore scrolling by removing the overflow style
  document.body.style.overflow = '';
}

/**
   * Navigates to the next project in the projects array, looping back to the start if at the end.
   */
nextProject() {
  if (!this.selectedProject) return;

  const currentIndex = this.projects.findIndex(
    (p) => p.id === this.selectedProject!.id
  );
  const nextIndex = (currentIndex + 1) % this.projects.length;
  this.selectedProject = this.projects[nextIndex];
}

}
