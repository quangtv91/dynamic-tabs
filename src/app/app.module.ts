import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainContentComponent} from './applications/main-content/main-content.component';
import {MenuComponent} from './applications/menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from './core/core.module';
import { MoviesComponent } from './applications/main-content/movies/movies.component';
import { SongsComponent } from './applications/main-content/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MenuComponent,
    MoviesComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
