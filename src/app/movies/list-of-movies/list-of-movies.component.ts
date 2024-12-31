import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-movies',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './list-of-movies.component.html',
  styleUrl: './list-of-movies.component.css'
})
export class ListOfMoviesComponent implements OnInit{
  ngOnInit(): void {

  }

  @Input({required: true})
  movies!: any[];

  addMovie() {
    this.movies.push({
      title: 'Scooby Doo',
      year: 2023,
      price: 10,
      poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
    })
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
}