import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsViewComponent } from './movie-details-view.component';
import { MovieDetailsViewRoutingModule } from './movie-details-view-routing.module';

@NgModule({
  declarations: [MovieDetailsViewComponent],
  imports: [
    CommonModule,
    MovieDetailsViewRoutingModule
  ]
})
export class MovieDetailsViewModule { }