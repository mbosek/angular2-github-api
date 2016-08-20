import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SpotifyComponent } from './spotify/spotify.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'spotify', component: SpotifyComponent}
];

export const routing = RouterModule.forRoot(routes);
