import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {
  cars = [
    {
      name: 'BMW',
      description: 'BMW is known for its luxury vehicles and motorcycles.',
      imageUrl: './assets/bmw_M.jpg.crdownload',
    },
    {
      name: 'Elantra',
      description:
        'The Hyundai Elantra is a compact car known for its reliability.',
      imageUrl: './assets/Hyundai-Elantra.jpg',
    },
    {
      name: 'Lancer',
      description:
        'The Mitsubishi Lancer is a compact car produced by Mitsubishi.',
      imageUrl: './assets/lancer-shark.jpg',
    },
  ];
}
