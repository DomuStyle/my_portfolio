import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateDirective, TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen: boolean = false;
  overlayState: boolean = true;

  currentLang: string = 'en';
  constructor(private translate: TranslateService) {}

  switchLang(language: string) {
    this.translate.use(language);
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(this.currentLang);
  }

  /**
   * Gets the appropriate language button class based on current language state.
   * @returns {string} The CSS class for the language button state.
   */
  getLangButtonClass(): string {
    return this.currentLang === 'de' 
      ? 'lang-btn-de-on' 
      : 'lang-btn-en-on';
  }

  /**
   * Gets the appropriate language button class for the burger menu based on current language state.
   * @returns {string} The CSS class for the burger menu language button state.
   */
  getBurgerLangButtonClass(): string {
    return this.currentLang === 'de' 
      ? 'burger-lang-btn-de-on' 
      : 'burger-lang-btn-en-on';
  }

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
  
  
  
  

