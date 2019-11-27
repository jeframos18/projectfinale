import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService} from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  private name:String;
  private admin:Admin[];
  private uname:String;
  private psw:String;
  constructor(private adminService:AdminService,private router:Router) { }
  // addAdmin(){
  //   var admin = new Admin();
  //   admin.name = this.name;
  //   admin.username = this.uname;
  //   admin.password = this.psw;
  //   this.adminService.addAdmin(admin).subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
  getAdmin(user,pass){
    this.adminService.getAdmin(user,pass).subscribe((data)=>{
      if(data.length!=0){
        this.router.navigate(['/homeadmin']);
      }
      else{
        alert("Invalid Username or Password!");
      }
    })
  }
  ngOnInit() {
  }

}
