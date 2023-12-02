import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-movie-details-view',
  templateUrl: './movie-details-view.component.html',
  styleUrls: ['./movie-details-view.component.scss']
})
export class MovieDetailsViewComponent implements OnInit {

  movie: Movie | undefined;
  isMovieInWatchList = false;

  constructor(private readonly appService: AppService) { }

  ngOnInit(): void {
    this.movie = this.appService.getMovie();
    this.isMovieInWatchList = this.appService.isMovieInWatchList(this.movie?.id || 0);
  }

  onWatchlistChange(): void {
    if (this.isMovieInWatchList) {
      this.appService.removeMovieFromWatchlist(this.movie?.id || 0);
    } else {
      this.appService.addMovieToWatchList(this.movie?.id || 0);
    }
    this.isMovieInWatchList = !this.isMovieInWatchList;
  }
}
