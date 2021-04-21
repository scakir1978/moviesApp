import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        name: 'Movie-1',
        description: 'güzel film-1',
        imageUrl: '1.jpg',
      },
      {
        id: 2,
        name: 'Movie-2',
        description: 'güzel film-2',
        imageUrl: '2.jpg',
      },
      {
        id: 3,
        name: 'Movie-3',
        description: 'güzel film-3',
        imageUrl: '3.jpg',
      },
      {
        id: 4,
        name: 'Movie-4',
        description: 'güzel film-4',
        imageUrl: '4.jpg',
      },
      {
        id: 5,
        name: 'Movie-5',
        description: 'güzel film-5',
        imageUrl: '5.jpg',
      },
      {
        id: 6,
        name: 'Movie-6',
        description: 'güzel film-6',
        imageUrl: '6.jpg',
      },
      {
        id: 7,
        name: 'Movie-7',
        description: 'güzel film-7',
        imageUrl: '7.jpg',
      },
    ];

    return { movies };
  }
  constructor() {}
}
