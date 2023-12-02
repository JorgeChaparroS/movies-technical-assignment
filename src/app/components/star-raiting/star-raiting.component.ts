import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-raiting',
  templateUrl: './star-raiting.component.html',
  styleUrls: ['./star-raiting.component.scss']
})
export class StarRaitingComponent {

  @Input() rating: number = 0;

  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }
}
