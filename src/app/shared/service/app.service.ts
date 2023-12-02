import { Injectable } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Injectable({
  providedIn: 'root'
})
export class AppService {

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

  createWatchlist(movieId: number): void {
    localStorage.setItem('watchlist', JSON.stringify([movieId]));
  }

  addAnotherMovieToWatchList(movieId: number): void {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '');
    watchlist.push(movieId);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  removeMovieFromWatchlist(movieId: number): void {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '');
    const index = watchlist.findIndex((id: number) => id === movieId);
    watchlist.splice(index, 1);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }
}
