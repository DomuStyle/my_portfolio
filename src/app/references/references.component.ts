import { Component, ViewChild, ElementRef } from '@angular/core';
import { References } from './../interfaces/references';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  reference: References[] = [
    {
      id: 1,
      author: 'Cem Erdogmus',
      text: `Dominik integrated seamlessly into the group work, 
             independently developed numerous solutions, 
             and played a key role in transforming the initial 
             folder structure chaos into a clear and understandable system. 
             Working with him was highly enjoyable, 
             and I am confident that he excels in a team environment.`,
      position: 'Frontend Developer',
    },
    {
      id: 2,
      author: 'Martin Bock',
      text: ` Dominik ist ein toller Kollege, der mit bemerkenswerter Effizienz und Geschwindigkeit arbeitet. 
              Seine Liebe zum Detail und seine ausgeglichene Art macht ihn zu einem unschätzbar wertvollen Teammitglied. 
              Neben seinen technischen Fähigkeiten trägt seine angenehme Persönlichkeit 
              zu einer harmonischen Arbeitsatmosphäre bei.`,
      position: 'Frontend Developer',
    },
    {
      id: 3,
      author: 'Normann Blum',
      text: `Mit Dominik zu arbeiten, war eine sehr angenehme Erfahrung! 
             Er ist nicht nur extrem engagiert und wissbegierig, 
             sondern bringt auch eine offene und kommunikative Art mit, 
             die jede Zusammenarbeit bereichert. Sein freundliches Wesen und seine Motivation, 
             sich ständig weiterzuentwickeln, machen ihn zu einem wertvollen Teamplayer, 
             mit dem das Arbeiten einfach Spaß macht.`,
      position: 'Frontend Developer',
    },
  ]

  /**
   * Tracks the currently active reference ID
   */
  currentIndex: number = 0;

  /**
   * Determines if a reference card should be marked as active
   * @param id The ID of the reference to check
   * @returns boolean indicating if the reference is currently active
   */
  isActive(id: number): boolean {
    return this.reference[this.currentIndex].id === id;
  }

  /**
   * Scrolls the references carousel to the left
   */
  scrollLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateScrollPosition();
    }
  }

  /**
   * Scrolls the references carousel to the right
   */
  scrollRight(): void {
    if (this.currentIndex < this.reference.length - 1) {
      this.currentIndex++;
      this.updateScrollPosition();
    }
  }

  /**
   * Updates the scroll position of the container to center the active card
   */
  private updateScrollPosition(): void {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.children[0].offsetWidth;
    const scrollPosition = this.currentIndex * cardWidth - (container.offsetWidth - cardWidth) / 2;
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
}
