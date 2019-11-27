import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { AdminService } from '../admin.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
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
  updateToggle = false;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(){
    this.adminService.getMovies().subscribe((data)=>{
        this.movies = data;
      }
    )
  }

viewMovie(id,i){
  this.router.navigateByUrl('/details');
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
    this.updateToggle = !this.updateToggle;
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
