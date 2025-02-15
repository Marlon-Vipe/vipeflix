import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent{
ngOnInit(): void {
  //this.maxRatingArray();
}
@Input({required: true, transform: (value: number) => Array(value).fill(0)}) 
maxRating!: number[];

@Input()
selectedRating: number = 0;
lastSelectedRating: number = 0;

handleMouseInput(index: number) {
  this.selectedRating = index + 1;
}

handleMouseLeave() {
  if (this.lastSelectedRating !== 0) {
    this.selectedRating = this.lastSelectedRating;
  }else {
    this.selectedRating = 0;
  }
}

handleClick(index: number) {
  this.selectedRating = index + 1;
  this.lastSelectedRating = this.selectedRating;
}
}