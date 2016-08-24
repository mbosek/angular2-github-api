import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { ArtistComponent } from './spotify/artist.component';
import { AlbumComponent } from './spotify/album.component';
import { TodosComponent } from './todos/todos.component';

import { GithubService } from './services/github.service';
import { SpotifyService } from './services/spotify.service';
import { TodoService } from './services/todo.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SpotifyComponent,
    ArtistComponent,
    AlbumComponent,
    TodosComponent
  ],
  providers: [
    GithubService,
    SpotifyService,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
