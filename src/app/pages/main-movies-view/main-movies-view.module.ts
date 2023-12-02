import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMoviesViewComponent } from './main-movies-view.component';
import { MainMoviesViewRoutingModule } from './main-movies-view-routing.module';
import { MovieThumbnailComponent } from 'src/app/components/movie-thumbnail/movie-thumbnail.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { StarRaitingModule } from 'src/app/components/star-raiting/star-raiting.module';

@NgModule({
  declarations: [MainMoviesViewComponent, MovieThumbnailComponent],
  imports: [
    CommonModule,
    MainMoviesViewRoutingModule,
    SharedModule,
    StarRaitingModule
  ]
})
export class MainMoviesViewModule { }