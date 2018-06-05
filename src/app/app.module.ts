import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FindByPrefixComponent } from './find-by-prefix/find-by-prefix.component';
import { HomeComponent } from './home/home.component';
import { CountryService } from './services/country.services';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SharingService } from './services/sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryDetailComponent,
    FindByPrefixComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"Home",component:HomeComponent},
      {path:"FindByPrefix",component:FindByPrefixComponent},
      {path:"CountryDetail",component:CountryDetailComponent},
      { path: '', redirectTo: 'Home', pathMatch: 'full'},
      { path: "**", component: AppComponent}
    ],{useHash:true}),
    MDBBootstrapModule.forRoot()
  ],
  providers: [CountryService,SharingService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
