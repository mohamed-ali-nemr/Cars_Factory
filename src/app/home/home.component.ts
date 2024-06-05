import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  stores = [
    {
      title: 'Assuit Branch',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content. ',
      srcImage: './assets/assuit.png',
      location: 'Assuit, Egypt',
    },
    {
      title: 'Cairo Branch',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content.',
      srcImage: './assets/cairo.png',
      location: 'Cairo, Egypt',
    },
    {
      title: 'Alexandria Branch',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content.',
      srcImage: './assets/alex.jpg',
      location: 'Alexandria, Egypt',
    },
  ];

  carModels = [
    {
      title: 'Bmw',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content. ',
      srcImage: './assets/bmw.jpg',
    },
    {
      title: 'Elentra',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content.',
      srcImage: './assets/elentra.jpg',
    },
    {
      title: 'Lancer',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content.',
      srcImage: './assets/lancer2.jpg',
    },
  ];

  items = [
    {
      title: 'Mask Edition',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content. ',
      srcImage: './assets/OIP.jpg',
    },
    {
      title: 'Grill Edition',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content.',
      srcImage: './assets/OIP (2).jpg',
    },
    {
      title: 'Wheels Edition',
      description:
        'This is a longer card with supporting text below as a natural lead-in to additional content.',
      srcImage: './assets/OIP (1).jpg',
    },
  ];
}
