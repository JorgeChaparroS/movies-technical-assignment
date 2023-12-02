import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsViewComponent } from './movie-details-view.component';
import { MovieDetailsViewRoutingModule } from './movie-details-view-routing.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { StarRaitingModule } from 'src/app/components/star-raiting/star-raiting.module';

@NgModule({
  declarations: [
    MovieDetailsViewComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsViewRoutingModule,
    SharedModule,
    YouTubePlayerModule,
    StarRaitingModule
  ]
})
export class MovieDetailsViewModule { }