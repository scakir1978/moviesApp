import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private loggingService: LoggingService) {}

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: Movies listed.');
    return of(Movies);
  }

  getMovie(id: number): Observable<Movie | undefined>{
    this.loggingService.add('MovieService: get detail by id=.' + id);
    return of(Movies.find(movie => movie.id === id));
  }
}
