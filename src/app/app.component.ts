import { CurrencyPipe, DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { ListOfMoviesComponent } from './movies/list-of-movies/list-of-movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, NgOptimizedImage,ListOfMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}