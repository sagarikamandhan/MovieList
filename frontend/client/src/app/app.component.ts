import { Component } from '@angular/core';
import { Item} from './item';
import {MoviesComponent} from './movies/movies.component';
import {AddmovieComponent} from'./addmovie/addmovie.component';
import{DataService} from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})


export class AppComponent {
  //title = 'jatt';

  constructor(private  dataService : DataService){}
  }
