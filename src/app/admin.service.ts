import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { Movie } from './movie';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private url:string = "http://localhost:80"; 

  getAdmin(username,password):Observable<Admin[]>{
    return this.http.get<Admin[]>(
      this.url + "/admin/"+username+"/"+password
       );
  }
  private headers = new HttpHeaders().set('Content-Type','application/json');
  // addAdmin(admin):Observable<Admin[]>{
  //   return this.http.post<Admin[]>(
  //     this.url+"/admin",
  //     admin,
  //     {headers:this.headers}
  //   );
  // }

  

  getMovies():Observable<any[]>{
    return this.http.get<any[]>(
      this.url + "/movie"
    );
  }

  getMovie(id):Observable<any[]>{
    return this.http.get<any[]>(
      this.url + "/movie/" + id
    );
  }

  addMovie(movie:Movie):Observable<any>{
    return this.http.post<any>(
      this.url + "/movie",
      movie,
      {headers:this.headers}
    )
  }

  updateMovie(movie:Movie, id:string):Observable<any>{
    return this.http.put<any>(
      this.url + '/movie/' + id,
      movie,
      {headers:this.headers}
    )
  }

  deleteMovie(id:string){
    return this.http.delete(
      this.url + '/movie/' + id);
  }
}
