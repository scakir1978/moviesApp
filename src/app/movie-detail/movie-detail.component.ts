import { Movie } from './../movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie! : Movie

  constructor() { }

  ngOnInit(): void {
  }

}
