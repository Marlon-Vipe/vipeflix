import { Component, OnInit } from '@angular/core';
import { ListOfMoviesComponent } from './movies/list-of-movies/list-of-movies.component';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListOfMoviesComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  movieInCinema!: any[];
  moviesinPremier!: any[];

  ngOnInit(): void {
    setTimeout(() => {
      this.movieInCinema = [
        {
          title: 'The Shawshank Redemption',
          year: 1994,
          price: 9.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
        },
        {
          title: 'The Godfather',
          year: 1972,
          price: 12.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          price: 14.99,
          poster: 'https://play-lh.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg'
        },
        {
          title: 'Forrest Gump',
          year: 1994,
          price: 8.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg'
        },
        {
          title: 'Inception',
          year: 2010,
          price: 11.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
        },
        {
          title: 'The Matrix',
          year: 1999,
          price: 10.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
        },
        {
          title: 'Interstellar',
          year: 2014,
          price: 13.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
        },
        {
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          year: 2001,
          price: 14.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg'
        }
      ];
    
    this.moviesinPremier = [
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        price: 9.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
      },
      {
        title: 'The Godfather',
        year: 1972,
        price: 12.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
      },
      {
        title: 'The Dark Knight',
        year: 2008,
        price: 14.99,
        poster: 'https://play-lh.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg'
      },
      {
        title: 'Forrest Gump',
        year: 1994,
        price: 8.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg'
      },
      {
        title: 'Inception',
        year: 2010,
        price: 11.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
      },
      {
        title: 'The Matrix',
        year: 1999,
        price: 10.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
      },
      {
        title: 'Interstellar',
        year: 2014,
        price: 13.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
      },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        price: 14.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg'
      }];
    }, 1000);
  }
}