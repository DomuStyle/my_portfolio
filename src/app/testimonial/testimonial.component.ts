import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from './../interfaces/testimonials';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials = signal<Testimonial[]>([]);

  private baseTestimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Cem Erdogmus',
      text: { key: 'testimonials.text1' },
      position: 'Frontend Developer',
    },
    {
      id: 2,
      author: 'Martin Bock',
      text: { key: 'testimonials.text2' },
      position: 'Frontend Developer',
    },
    {
      id: 3,
      author: 'Normann Blum',
      text: { key: 'testimonials.text3' },
      position: 'Frontend Developer',
    },
    {
      id: 4,
      author: 'Philipp Franke',
      text: { key: 'testimonials.text4' },
      position: 'Frontend Developer',
    },
    {
      id: 5,
      author: 'Philipp Franke',
      text: { key: 'testimonials.text5' },
      position: 'Frontend Developer',
    },
    {
      id: 6,
      author: 'Ismail Baris',
      text: { key: 'testimonials.text6' },
      position: 'Frontend Developer',
    },
  ];

  currentIndex = signal(0);

  constructor(private translate: TranslateService) {
    // Initialize testimonials with translated values
    this.updateTranslations();

    // Subscribe to language change events
    this.translate.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
  }

  /**
   * Switches the active language and triggers re-translation.
   * @param language The language code to switch to (e.g., 'en', 'de').
   */
  switchLang(language: string) {
    this.translate.use(language);
  }

  /**
   * Updates the testimonials signal with translated text based on the current language.
   */
  private updateTranslations() {
    const translatedTestimonials = this.baseTestimonials.map(testimonial => {
      if (typeof testimonial.text === 'object' && 'key' in testimonial.text) {
        return {
          ...testimonial,
          text: this.translate.instant(testimonial.text.key)
        };
      }
      return { ...testimonial };
    });
    this.testimonials.set(translatedTestimonials);
  }

  /**
   * Moves to the previous testimonial in the carousel.
   */
  prevTestimonial() {
    this.currentIndex.update(
      (current) =>
        (current - 1 + this.testimonials().length) % this.testimonials().length
    );
  }

  /**
   * Moves to the next testimonial in the carousel.
   */
  nextTestimonial() {
    this.currentIndex.update(
      (current) => (current + 1) % this.testimonials().length
    );
  }

  /**
   * Gets the index of the previous testimonial.
   * @returns The previous index in the testimonials array.
   */
  getPrevIndex(): number {
    return (
      (this.currentIndex() - 1 + this.testimonials().length) %
      this.testimonials().length
    );
  }

  /**
   * Gets the index of the next testimonial.
   * @returns The next index in the testimonials array.
   */
  getNextIndex(): number {
    return (this.currentIndex() + 1) % this.testimonials().length;
  }
}
