import { Component } from '@angular/core';
import { References } from './../interfaces/references';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {


  reference: References[] = [
    {
      id: 1,
      author: 'F.Fischer',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Mollitia aliquid voluptatum natus cumque ad repudiandae ipsum
             exercitationem optio sit voluptates ipsa aliquam,
             commodi nesciunt eligendi minima iste tempore sint aperiam?`,
      position: 'Frontend Developer',
    },
    {
      id: 2,
      author: 'F.Fischer',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Mollitia aliquid voluptatum natus cumque ad repudiandae ipsum
             exercitationem optio sit voluptates ipsa aliquam,
             commodi nesciunt eligendi minima iste tempore sint aperiam?`,
      position: 'Frontend Developer',
    },
    {
      id: 3,
      author: 'F.Fischer',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Mollitia aliquid voluptatum natus cumque ad repudiandae ipsum
             exercitationem optio sit voluptates ipsa aliquam,
             commodi nesciunt eligendi minima iste tempore sint aperiam?`,
      position: 'Frontend Developer',
    },
  ]
}
