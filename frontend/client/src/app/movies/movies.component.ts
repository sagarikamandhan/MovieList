import { Component, OnInit } from '@angular/core';
import { Item} from '../item';
import{DataService} from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers : [DataService]
})
export class MoviesComponent implements OnInit {
title = 'Movie component is working';


  movieItems : Item[] = [];
  visible : boolean = false;
  message : string;
  constructor(private dataService : DataService) { }

getMovies(){
  this.dataService.getMovieList().subscribe(items => {
  this.movieItems = items;
  console.log("data from " + this.movieItems);
  });
}
delete(id){
  this.dataService.deleteMovies(id).subscribe(items =>{
    this.message = items.msg;
    console.log(this.message);
    this.getMovies();
  });
}

  ngOnInit() {
  this.getMovies();
  }

}
