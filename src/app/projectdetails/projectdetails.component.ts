import { Component } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  standalone: true,
  imports: [],
  templateUrl: './projectdetails.component.html',
  styleUrl: './projectdetails.component.scss'
})
export class ProjectdetailsComponent {

  isOverlayOpen = false;

  project = [
    {
    id: 1,
    title: 'Join',
    description: `
          Task manager inspired by the Kanban System. 
          Create and organize tasks using drag and drop functions, 
          assign users and categories.`,
    img: 'join_project_l.png',
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

  currentItem = 'id';

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
    const keys = Object.keys(this.project);
    const index = keys.indexOf(this.currentItem);
    this.currentItem = keys[(index + 1) % keys.length];
  }
}
