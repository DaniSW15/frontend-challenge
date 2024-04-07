import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private readonly url = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) { }

  getRepos(nombre: string) {
    return this.http.get(`${this.url}${nombre}`);
  }
}
