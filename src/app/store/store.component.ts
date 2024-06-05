import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  carCategories = [
    {
      title: 'Sedans',
      description: 'Comfortable and efficient for city driving.',
      image: 'assets/store11.jpg',
    },
    {
      title: 'SUVs',
      description: 'Spacious and powerful for all terrains.',
      image: 'assets/store22.jpg',
    },
    {
      title: 'Trucks',
      description: 'Durable and strong for heavy-duty tasks.',
      image: 'assets/store33.jpg',
    },
    {
      title: 'Sports Cars',
      description: 'Fast and stylish for the thrill-seekers.',
      image: 'assets/store44.jpg',
    },
    // Add more categories as needed
  ];

  constructor() {}
}
