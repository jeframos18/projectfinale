import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ModalModule} from 'ngx-bootstrap/modal';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'homeadmin', component: AdminviewComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'details', component: MoviedetailsComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ModalModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
