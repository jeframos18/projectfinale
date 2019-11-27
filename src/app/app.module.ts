import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClient } from 'selenium-webdriver/http';
import { SearchFilterPipe } from './adminview/search-filter.pipe';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SafePipe } from './safe.pipe';
import { ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    AdminviewComponent,
    PagenotfoundComponent,
    SearchFilterPipe,
    SafePipe,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
