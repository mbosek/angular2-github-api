import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})

export class AlbumComponent implements OnInit {

  private id: string;
  private album: Album;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe(id => {
            this.spotifyService.getAlbum(id)
                .subscribe(album => this.album = album);
    });
  }

 

}
