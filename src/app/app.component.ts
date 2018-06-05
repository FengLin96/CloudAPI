import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CountryService, ICountry } from './services/country.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  result:ICountry;
  constructor(private svc:CountryService)
  {
  }

  ngOnInit(): void {
    this.svc.getCountry("Fr")
    .subscribe(res=>{
     this.result = res;
    console.log(this.result);
    })

  }
  title = 'app';

}
