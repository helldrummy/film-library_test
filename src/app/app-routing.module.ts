import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmListComponent} from './components/film-list/film-list/film-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
