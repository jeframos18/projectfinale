import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { AdminService} from '../admin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  searchTerm: String;
  private movies:Movie[];
  private movieUpdate:Movie[];
  private movieTitle: String;
  private movieDirector: String;
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

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
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

  

  addFormToggle(){
    this.addToggle = !this.addToggle;
  }

  updateFormToggle(id,i){
    this.updateToggle = true;
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

  movieFormToggle(id,i){
    this.movieToggle = !this.movieToggle;
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



  addMovie(){
    const movie = new Movie();
    movie.title = this.movieTitle;
    movie.director = this.movieDirector;
    movie.image = this.moviePhoto;
    movie.description = this.movieDescription;
    movie.dateShow = this.movieDate;
    movie.trailer = this.movieTrailer;
    this.adminService.addMovie(movie).subscribe((data)=>{
        console.log(data);  
        this.getMovies();
      }
    )
    this.addFormToggle();
  }

  deleteMovie(id){
    if(confirm("Do you really want to delete this movie?")){
    this.adminService.deleteMovie(id).subscribe((data)=>{
      console.log(data);
      this.getMovies();
    })
    }
  }

  updateMovie(){
    const movie = new Movie();
    movie.title = this.editTitle;
    movie.director = this.editDirector;
    movie.image = this.editPhoto;
    movie.description = this.editDescription;
    movie.dateShow = this.editDate;
    movie.trailer = this.editTrailer;
       this.adminService.updateMovie(movie, this.movieID).subscribe((data)=>{
        console.log(data);
        this.getMovies();
      })
  }
}

