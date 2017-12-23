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
  getMovieById(id){
    return this.http.get('http://localhost:3000/api/movies/'+id).map(res =>res.json());
  }
  addMovies(movie){
    let headers = new Headers();
    headers.append('content-tye','application/json');
       return this.http.post('http://localhost:3000/api/movie',movie,{headers : headers}).map(res => res.json());
  }
  deleteMovies(id){
    return this.http.delete('http://localhost:3000/api/movie/'+id).map(res=> res.json());
  }
  updateMovie(movie){
    let headers = new Headers();
    headers.append('content-tye','application/json');
       return this.http.put('http://localhost:3000/api/movie/'+movie._id,movie,{headers : headers}).map(res => res.json());
  }
}
