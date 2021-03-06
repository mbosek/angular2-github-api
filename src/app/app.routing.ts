import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { ArtistComponent } from './spotify/artist.component';
import { AlbumComponent } from './spotify/album.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'spotify', component: SpotifyComponent},
  { path: 'spotify/artist/:id', component: ArtistComponent},
  { path: 'spotify/album/:id', component: AlbumComponent},
  { path: 'todos', component: TodosComponent}
];

export const routing = RouterModule.forRoot(routes);
