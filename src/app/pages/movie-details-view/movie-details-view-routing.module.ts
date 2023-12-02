import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsViewComponent } from './/movie-details-view.component';


const routes: Routes = [
  {
    path: '',
    component: MovieDetailsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsViewRoutingModule { }