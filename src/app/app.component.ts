import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, CurrencyPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies = [
    { title: 'The Shawshank Redemption', year: 1994, price: 9.99 },
    { title: 'The Godfather', year: 1972, price: 12.99 },
    { title: 'The Dark Knight', year: 2008, price: 14.99 },
    { title: 'Forrest Gump', year: 1994, price: 8.99 },
    { title: 'Inception', year: 2010, price: 11.99 },
    { title: 'The Matrix', year: 1999, price: 10.99 },
    { title: 'Interstellar', year: 2014, price: 13.99 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, price: 14.99 },
  ]

  duplicateNumber(value: number) : number {
    return value * 2;
  } 
}