import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number,
  author: string;
  text: string;
  position: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

  testimonials = signal<Testimonial[]>([
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
  ]);

  currentIndex = signal(0);

  prevTestimonial() {
    this.currentIndex.update(
      (current) =>
        (current - 1 + this.testimonials().length) % this.testimonials().length
    );
  }

  nextTestimonial() {
    this.currentIndex.update(
      (current) => (current + 1) % this.testimonials().length
    );
  }

  getPrevIndex(): number {
    return (
      (this.currentIndex() - 1 + this.testimonials().length) %
      this.testimonials().length
    );
  }

  getNextIndex(): number {
    return (this.currentIndex() + 1) % this.testimonials().length;
  }
}
