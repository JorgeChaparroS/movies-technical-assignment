import { Injectable } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  movieSelected: Movie|undefined;

  constructor() { }

  sortByReleaseDate(a: Movie, b: Movie): number {
    if (a.releaseDate > b.releaseDate) {
      return -1;
    } else {
      return 1;
    }
  }

  sortByTitle(a: Movie, b: Movie): number {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  }

  isMovieInWatchList(movieId: number): boolean {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    return watchlist.includes(movieId);
  }

  addMovieToWatchList(movieId: number): void {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    watchlist.push(movieId);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  removeMovieFromWatchlist(movieId: number): void {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '');
    const index = watchlist.findIndex((id: number) => id === movieId);
    watchlist.splice(index, 1);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  setMovie(movie: Movie|undefined): void {
    this.movieSelected = movie;
  }

  getMovie(): Movie|undefined {
    return this.movieSelected;
  }

  getYoutubeVideoId(trailerURL: string): string {
    return trailerURL.split('?v=')[1];
  }
}
