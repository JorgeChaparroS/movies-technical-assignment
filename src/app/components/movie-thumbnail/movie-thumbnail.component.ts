import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.scss']
})
export class MovieThumbnailComponent implements OnInit {

  @Input() movie: Movie|undefined;

  @Output() watchListEvent = new EventEmitter();

  isMovieInWatchList = false;

  constructor(private readonly router: Router,
    private readonly appService: AppService) {}

  ngOnInit(): void {
      this.isMovieInWatchList = this.appService.isMovieInWatchList(this.movie?.id || 0);
  }

  onGoToDetails(): void {
    this.appService.setMovie(this.movie);
    this.router.navigate(['/movie-details'])
  }

  onWatchListAction(): void {
    this.isMovieInWatchList = !this.isMovieInWatchList;
    this.watchListEvent.emit();
  }
}
