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
      text: `Dominik fügte sich nahtlos in die Gruppenarbeit ein, 
             entwickelte selbstständig zahlreiche Lösungen und spielte 
             eine Schlüsselrolle dabei, das anfängliche Chaos der Ordnerstruktur 
             in ein klares und verständliches System zu verwandeln. 
             Die Zusammenarbeit mit ihm war äußerst angenehm, und ich bin überzeugt, 
             dass er in einem Teamumfeld hervorragend abschneidet.`,
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
    {
      id: 4,
      author: 'Philipp Franke',
      text: `Dominik ist ein äußerst zuverlässiger Teamplayer. 
             Er scheut keine Herausforderung und ist stets bereit, 
             Verantwortung zu übernehmen. Seine Fähigkeit, 
             auch unter Zeitdruck klare Lösungen zu finden, ist beeindruckend. Projekt: Kochwelt`,
      position: 'Frontend Developer',
    },
    {
      id: 5,
      author: 'Philipp Franke',
      text: `Dominik ist ein belastbarer und engagierter Teamkollege, 
             der auch in schwierigen Zeiten fokussiert blieb. 
             Trotz persönlicher Herausforderungen arbeitete er konzentriert am 
             Projekterfolg und steigerte im Vergleich zum letzten Gruppenprojekt 
             deutlich seine Effizienz. Er nahm Feedback offen an, 
             bewahrte bei Rückschlägen seine positive Einstellung und zeigte stets 
             Freude an der Arbeit. Projekt: Join`,
      position: 'Frontend Developer',
    },
    {
      id: 6,
      author: 'Ismail Baris',
      text: `Mit Dominik zusammenzuarbeiten war immer eine Bereicherung, 
             da er nicht nur fachlich versiert ist, sondern auch eine sehr 
             lösungsorientierte Denkweise mitbringt. Er geht auf verschiedene Ansätze ein, 
             hinterfragt bestehende Strukturen und trägt so dazu bei, 
             dass das Team gemeinsam die besten Lösungen findet. Projekt: Kochwelt`,
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
