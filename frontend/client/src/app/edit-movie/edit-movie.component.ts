import { Component, OnInit } from '@angular/core';
import { Item} from '../item';
import { DataService} from '../data.service';
import{ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
  providers :[DataService]
})
export class EditMovieComponent implements OnInit {
  selectedItem : Item;
  id : string;
  msg : string;
  constructor(private dataService:DataService, private route : ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("_id");
    console.log(this.id);
    this.dataService.getMovieById(this.id).subscribe(items => {
      this.selectedItem = items;
      console.log(this.selectedItem);
    });
  }
  updateMoviedetails(editform){
    this.dataService.updateMovie(this.selectedItem).subscribe(items =>{
      if(items != null){
        this.msg ="updated successfully";
        editform.reset();
      }
  });
}
}
