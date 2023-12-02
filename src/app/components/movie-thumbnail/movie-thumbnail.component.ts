import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.scss']
})
export class MovieThumbnailComponent implements OnInit {

  @Input() movie: Movie|undefined;

  @Output() watchListEvent = new EventEmitter();

  isMovieInWatchList = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
      const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
      this.isMovieInWatchList = watchlist.includes(this.movie?.id);
  }

  onGoToDetails(): void {
    this.router.navigate(['/movie-details'])
  }

  onWatchListAction(): void {
    this.isMovieInWatchList = !this.isMovieInWatchList;
    this.watchListEvent.emit();
  }
}
