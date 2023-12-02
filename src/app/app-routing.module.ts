import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { movieGuard } from './guards/movie.guard';

const routes: Routes = [
  {
    path: 'movies',
    title: 'App - Movies',
    loadChildren: () => import('./pages/main-movies-view/main-movies-view.module').then(m => m.MainMoviesViewModule)
  },
  {
    path: 'movie-details',
    canActivate: [movieGuard],
    title: 'App - Movie Details',
    loadChildren: () => import('./pages/movie-details-view/movie-details-view.module').then(m => m.MovieDetailsViewModule)
  },
  {
    path: 'author',
    title: 'App - Author',
    loadChildren: () => import('./pages/author/author.module').then(m => m.AuthorModule)
  },
  {
    path: 'about',
    title: 'App - About',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
