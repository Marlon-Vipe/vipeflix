import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../../material/material.module';
@Component({
  selector: 'app-list-of-movies',
  standalone: true,
  imports: [CommonModule, GenericListComponent, MaterialModule],
  templateUrl: './list-of-movies.component.html',
  styleUrl: './list-of-movies.component.css'
})
export class ListOfMoviesComponent {
  @Input({required: true}) movies!: any[];

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

  // TODO
}