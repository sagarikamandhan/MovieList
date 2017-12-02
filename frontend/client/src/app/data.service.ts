import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) {
  }
  getMovieList(){
    return this.http.get('http://localhost:3000/api/movies').map(res => res.json());
  }
}
