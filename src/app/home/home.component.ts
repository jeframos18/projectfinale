import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { AdminService} from '../admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private movies:Movie[];
  searchTerm: string;
  private movieTitle: String;
  private movieDirector: String;
  private movieUpdate:Movie[];
  private moviePhoto: String;
  private movieDate: Date;
  private movieTrailer: String;
  private movieDescription: String; 
  private movieID; 
  editTitle;
  editDirector;
  editPhoto;
  editDate;
  editTrailer;
  editDescription;
  addToggle = false;
  movieToggle = false;
  viewToggle = false;
  updateToggle = false;


  constructor(private adminService: AdminService) { }

  ngOnInit() { this.getMovies();
  }
  getMovies(){
    this.adminService.getMovies().subscribe((data)=>{
        this.movies = data;
      }
    )
  }

viewFormToggle(id,i){
  this.viewToggle = true;
  this.movieID = id;
  this.adminService.getMovie(id).subscribe((data)=>{
  this.movieUpdate = data;
 // alert(this.movieUpdate);
 this.movieUpdate.forEach(mov =>{
  this.editDirector = mov.director;
  this.editTitle = mov.title;
  this.editPhoto = mov.image;
  this.editDate = mov.dateShow;
  this.editDescription = mov.description;
  this.editTrailer = mov.trailer;
})
})
  
}
}