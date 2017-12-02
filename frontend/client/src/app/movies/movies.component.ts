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
  movieItems : Item[] = [];
  constructor(private dataService : DataService) { }

getMovies(){
  this.dataService.getMovieList().subscribe(items => {
    this.movieItems = items;
    console.log("data from " + this.movieItems);
  });
}
  ngOnInit() {
    this.getMovies();
  }

}
