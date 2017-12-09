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
  selectedItems : Item;
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
update(item){
  this.visible = true;
  this.selectedItems = item;
  console.log(this.selectedItems);
}
updateMoviedetails(form){
      let newItem : Item ={
        _id : this.selectedItems._id,
        movie_name :form.value.moviename,
        movie_genre:form.value.moviegenre,
        movie_description:form.value.moviedescription,
        movie_release:form.value.movierelease,
        movie_image:form.value.movieurl
      }
      this.dataService.updateMovie(newItem).subscribe(items =>{
        this.message = items.msg;
        console.log(items.msg);
        this.getMovies();
        this.visible =false;
      });
}

  ngOnInit() {
  this.getMovies();
  }

}
