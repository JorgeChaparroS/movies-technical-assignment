import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/service/app.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-main-movies-view',
  templateUrl: './main-movies-view.component.html',
  styleUrls: ['./main-movies-view.component.scss']
})
export class MainMoviesViewComponent {

  movies = Constants.MOVIES;
  sortedByName = false;

  constructor(private readonly appService: AppService) {}

  sorting(): void {
    if (this.sortedByName) {
      this.movies.sort(this.appService.sortByTitle);
    } else {
      this.movies.sort(this.appService.sortByReleaseDate);
    }
    this.sortedByName = !this.sortedByName;
  }

  onWatchListEvent(movieId: number): void {
    if (JSON.parse(localStorage.getItem('watchlist') || '[]').includes(movieId)) {
      this.appService.removeMovieFromWatchlist(movieId);
    } else {
      this.appService.addMovieToWatchList(movieId);
    }
  }
}
