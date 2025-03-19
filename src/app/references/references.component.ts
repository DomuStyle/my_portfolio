// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { References } from './../interfaces/references';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-references',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './references.component.html',
//   styleUrl: './references.component.scss'
// })

// export class ReferencesComponent {

//   @ViewChild('scrollContainer') scrollContainer!: ElementRef;

//   reference: References[] = [
//     {
//       id: 1,
//       author: 'Cem Erdogmus',
//       text: `Dominik integrated seamlessly into the group work, 
//              independently developed numerous solutions, 
//              and played a key role in transforming the initial 
//              folder structure chaos into a clear and understandable system. 
//              Working with him was highly enjoyable, 
//              and I am confident that he excels in a team environment.`,
//       position: 'Frontend Developer',
//     },
//     {
//       id: 2,
//       author: 'Martin Bock',
//       text: ` Dominik ist ein toller Kollege, der mit bemerkenswerter Effizienz und Geschwindigkeit arbeitet. 
//               Seine Liebe zum Detail und seine ausgeglichene Art macht ihn zu einem unschätzbar wertvollen Teammitglied. 
//               Neben seinen technischen Fähigkeiten trägt seine angenehme Persönlichkeit 
//               zu einer harmonischen Arbeitsatmosphäre bei.`,
//       position: 'Frontend Developer',
//     },
//     {
//       id: 3,
//       author: 'Normann Blum',
//       text: `Mit Dominik zu arbeiten, war eine sehr angenehme Erfahrung! 
//              Er ist nicht nur extrem engagiert und wissbegierig, 
//              sondern bringt auch eine offene und kommunikative Art mit, 
//              die jede Zusammenarbeit bereichert. Sein freundliches Wesen und seine Motivation, 
//              sich ständig weiterzuentwickeln, machen ihn zu einem wertvollen Teamplayer, 
//              mit dem das Arbeiten einfach Spaß macht.`,
//       position: 'Frontend Developer',
//     },
//   ]

//   /**
//    * Tracks the currently active reference index
//    */
//   currentIndex: number = 0;

//   /**
//    * Determines if a reference card should be marked as active
//    * @param id The ID of the reference to check
//    * @returns boolean indicating if the reference is currently active
//    */
//   isActive(id: number): boolean {
//     return this.reference[this.currentIndex].id === id;
//   }

//   /**
//    * Scrolls the references carousel to the left
//    */
//   scrollLeft(): void {
//     if (this.currentIndex > 0) {
//       this.currentIndex--;
//       this.scrollToCurrentIndex();
//     }
//   }

//   /**
//    * Scrolls the references carousel to the right
//    */
//   scrollRight(): void {
//     if (this.currentIndex < this.reference.length - 1) {
//       this.currentIndex++;
//       this.scrollToCurrentIndex();
//     }
//   }

//   /**
//    * Performs the horizontal scroll animation to the current index
//    */
//   private scrollToCurrentIndex(): void {
//     const container = this.scrollContainer.nativeElement;
//     const cardWidth = container.children[0].offsetWidth + 20; // Including gap
//     const scrollPosition = this.currentIndex * cardWidth;
    
//     container.scrollTo({
//       left: scrollPosition,
//       behavior: 'smooth'
//     });
//   }

//   /**
//    * Initializes the scroll position when component loads
//    */
//   ngAfterViewInit(): void {
//     this.scrollToCurrentIndex();
//   }

// }

import { Component, AfterViewInit } from '@angular/core';
import { References } from './../interfaces/references';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements AfterViewInit {

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
  ];

  /**
   * Tracks the current position in the infinite loop
   */
  currentIndex: number = 0;

  /**
   * Controls the sliding animation offset (in pixels)
   */
  slideOffset: number = 0;

  /**
   * Determines if a reference card should be marked as active
   * @param index The index of the reference in the array (0: left, 1: middle, 2: right)
   * @returns boolean indicating if the reference is currently active (true for middle card)
   */
  isActive(index: number): boolean {
    return index === 1; // Middle card is always active
  }

  /**
   * Initializes the component
   */
  ngAfterViewInit(): void {
    // No dynamic updates needed initially
  }

  /**
   * Slides the carousel to the left
   */
  scrollLeft(): void {
    this.currentIndex = (this.currentIndex - 1 + this.reference.length) % this.reference.length;
    this.slideOffset += 420; // Incrementally slide right (positive for left movement)
    setTimeout(() => {
      this.adjustCards('left');
    }, 500); // Match CSS transition duration
  }

  /**
   * Slides the carousel to the right
   */
  scrollRight(): void {
    this.currentIndex = (this.currentIndex + 1) % this.reference.length;
    this.slideOffset -= 420; // Incrementally slide left (negative for right movement)
    setTimeout(() => {
      this.adjustCards('right');
    }, 500); // Match CSS transition duration
  }

  /**
   * Adjusts the card order to maintain the infinite scroll effect without resetting offset
   * @param direction The direction of the scroll ('left' or 'right')
   */
  private adjustCards(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      // Move the last card to the front
      const lastCard = this.reference.pop();
      if (lastCard) this.reference.unshift(lastCard);
      this.slideOffset = 0; // Reset to center after adjustment
    } else {
      // Move the first card to the end
      const firstCard = this.reference.shift();
      if (firstCard) this.reference.push(firstCard);
      this.slideOffset = 0; // Reset to center after adjustment
    }
  }
}