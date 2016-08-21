import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../models/artist';
import {ROUTER_DIRECTIVES} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})

export class SpotifyComponent implements OnInit {
  
  private searchStr: string;
  private searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    
  }

  searchMusic() { 
    this.spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }

}
