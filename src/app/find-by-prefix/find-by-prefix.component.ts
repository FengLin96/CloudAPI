import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CountryService, ICountry,IData } from 'src/app/services/country.services';

@Component({
  selector: 'app-find-by-prefix',
  templateUrl: './find-by-prefix.component.html',
  styleUrls: ['./find-by-prefix.component.css']
})
export class FindByPrefixComponent implements OnInit {
  
  result:ICountry;
  data:IData[];
  inCountry:string;
  selectedCountry:string;
  constructor(private svc:CountryService)
  {  

  }

  ngOnInit(): void {
   
  }
  
  
  public FindCountry() {
    this.svc.getCountry(this.inCountry)
    .subscribe(res=>{
     this.result = res;
     this.data = this.result.data;
     console.log(this.data[0].code);
     console.log(this.data[0].currencyCodes);
     console.log(this.data[0].name);
     console.log(this.data[0].wikiDataId);
    })
   
  }
  public OnSelect(countryCode:string)
  {
    this.selectedCountry = countryCode;
  }

}
