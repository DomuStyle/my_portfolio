import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isOpen: boolean = false;
  overlayState: boolean = true;
  
  closeOverlay(): void {
    this.isOpen = false;
  }

  /**
   * Toggles the overlay state.
   *
   * - If the overlay is open, it will be closed.
   * - If the overlay is closed, it will be opened.
   *
   * @returns {void} This method does not return anything.
   */
  toggleOverlay(): void {
    this.isOpen = !this.isOpen;
    this.overlayState = !this.overlayState;
  }
}
