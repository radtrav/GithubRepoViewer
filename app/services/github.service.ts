import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = '5a9163178053758f54e5';
  private client_secret = '070596a7c74c374ab2f93e59c563591f3cb66914';

  constructor(private _http: Http){
    console.log('Github Service Ready');
    this.username = 'radtrav';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret  ).map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret  ).map(res => res.json());
  }

}


