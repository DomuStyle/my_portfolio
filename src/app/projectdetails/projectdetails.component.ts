import { Component } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  standalone: true,
  imports: [],
  templateUrl: './projectdetails.component.html',
  styleUrl: './projectdetails.component.scss'
})
export class ProjectdetailsComponent {

//   isOverlayOpen = false;

//   items = [
//     {
//     id: 1,
//     name: 'Join',
//     img: 'join_project_l.png',
//     text: `
//           Task manager inspired by the Kanban System. 
//           Create and organize tasks using drag and drop functions, 
//           assign users and categories.`,
//     gitUrl: '',
//     openProjectUrl: ''

//     },
//     {
//       id: 2,
//       name: 'El Pollo Loco',
//       img: 'el_pollo_loco_project_l.png',
//       text: `
//           Jump, run and throw game based on object-oriented approach. 
//           Help Pepe to find coins and tabasco salsa to fight against the crazy hen.`,
//       gitUrl: '',
//       openProjectUrl: ''
//     },
//     {
//      id: 3,
//      name: 'DaBubble',
//       img: 'da_bubble_project.png',
//       text: `
//           This App is a Slack Clone App. 
//           It revolutionizes team communication and collaboration with its intuitive interface, 
//           real-time messaging, and robust channel organization.`,
//       gitUrl: '',
//       openProjectUrl: ''
//     }
// ];

//   currentItem = 'id';

  // toggleOverlay() {
  //   // Toggle overlay visibility
  //   this.isOverlayOpen = !this.isOverlayOpen;
  // }

  // closeOverlay(event?: MouseEvent) {
  //   // Close overlay if clicked outside content or on close button
  //   if (!event || event.target === event.currentTarget) {
  //     this.isOverlayOpen = false;
  //   }
  // }

  // nextItem() {
  //   // Cycle through items using keys
  //   const keys = Object.keys(this.items);
  //   const index = keys.indexOf(this.currentItem);
  //   this.currentItem = keys[(index + 1) % keys.length];
  // }
}
