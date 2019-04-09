import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
  {path:'', redirectTo: '/apod', pathMatch: 'full'},
  {path:'apod', component: ApodComponent},
  {path:'apod/:date', component: ApodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
