import { Component, OnInit } from '@angular/core';
import { Item} from '../item';
import{DataService} from '../data.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
  providers : [DataService]
})
export class AddmovieComponent implements OnInit {
message : string;
  constructor(private dataService : DataService) { }
addMoviedetails(form){
      let newItem : Item ={
        movie_name :form.value.moviename,
        movie_genre:form.value.moviegenre,
        movie_description:form.value.moviedescription,
        movie_release:form.value.movierelease,
        movie_image:form.value.movieurl
      }
      this.dataService.addMovies(newItem).subscribe(items =>{
        this.message = items.msg;
        console.log(items.msg);
        form.reset();
      });
}
  ngOnInit() {
  }

}
