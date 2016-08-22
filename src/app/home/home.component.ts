import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    private user: Array<string>;
    private repos: Array<string>;
    private username: string;

    constructor(private githubService: GithubService) {
      this.user = null;
    }

  ngOnInit() {}

  searchuser() {
       this.githubService.updateUser(this.username);    
       this.githubService.getUser().subscribe(user => this.user = user);   
       this.githubService.getRepos().subscribe(repos => this.repos = repos);
    }
}
