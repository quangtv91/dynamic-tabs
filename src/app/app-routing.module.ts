import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from './applications/main-content/movies/movies.component';
import {SongsComponent} from './applications/main-content/songs/songs.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
