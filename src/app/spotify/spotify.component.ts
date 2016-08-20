import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})

export class SpotifyComponent implements OnInit {
  private searchStr: string;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    console.log('Hello Spotify');
  }

  searchMusic() { 
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res.artists.items);
    });
  }

}
