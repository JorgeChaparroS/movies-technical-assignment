import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMoviesViewComponent } from './main-movies-view.component';


const routes: Routes = [
  {
    path: '',
    component: MainMoviesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMoviesViewRoutingModule { }