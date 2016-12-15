import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable"; 

export interface Post{
  id: number;
  title: string;
  body:string;
}

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(response => response.json());
  }

}
