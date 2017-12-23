import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const ROUTES : Routes = [
  {path : "", component : MoviesComponent,pathMatch : "full"},
  {path : "addmovie", component : AddmovieComponent,pathMatch : "full"},
  {path : "updatemovie/:_id",component : EditMovieComponent,pathMatch : "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AddmovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
