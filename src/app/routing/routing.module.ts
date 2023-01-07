import { MusicComponent } from './../music/music.component';
import { CurrentComponent } from './../current/current.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component: CurrentComponent
  },
  {
    path: 'music',
    component: MusicComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class RoutingModule { }
