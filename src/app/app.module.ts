import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FindByIdComponent } from './find-by-id/find-by-id.component';
import { FindByPrefixComponent } from './find-by-prefix/find-by-prefix.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryDetailComponent,
    FindByIdComponent,
    FindByPrefixComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
