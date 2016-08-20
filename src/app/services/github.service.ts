import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private clientId = '8a8f57323a1ef172b6af';
    private clientSecret = '8872bfe27ee9a534134401fe401ae4eb107278d6';
    

    constructor(private http: Http) {
        this.username = 'mbosek';
    }

    getUser() {
        let url = `http://api.github.com/users/${this.username}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`;
        return this.http.get(url).map(res => res.json());
    }

     getRepos() {
        let url = `http://api.github.com/users/${this.username}/repos?clientId=${this.clientId}&clientSecret=${this.clientSecret}`;
        return this.http.get(url).map(res => res.json());
    }
    
    updateUser(username: string) {
        this.username = username;
    }
}