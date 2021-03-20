import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent {
  title = 'Movie List';
  movies!: Movie[];
  selectedMovie!: Movie;

  constructor(private movieService: MovieService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

}
