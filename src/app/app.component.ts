import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  directives: [HomeComponent],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class AppComponent {

}
