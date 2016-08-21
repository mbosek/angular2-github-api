import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})

export class ArtistComponent implements OnInit {

  private albums: Album[];
  private artist: Artist[];
  
  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe(id => {
            this.spotifyService.getArtist(id)
                .subscribe(artist => this.artist = artist);

            this.spotifyService.getAlbums(id)
                .subscribe(albums => this.albums = albums.items);
    });
  }
  
}
