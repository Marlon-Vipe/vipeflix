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
}