import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CountryService, ICountry,IData, IPaging, ILink } from 'src/app/services/country.services';
import { SharingService } from 'src/app/services/sharing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-by-prefix',
  templateUrl: './find-by-prefix.component.html',
  styleUrls: ['./find-by-prefix.component.css']
})
export class FindByPrefixComponent implements OnInit {
  
  result:ICountry;
  paging:IPaging;
  data:IData[];
  inCountry:string;
  link:ILink[];

  //paging url
  urlFirst:string;
  urlLast:string;
  urlPre:string;
  urlNext:string;
  
  constructor(private svc:CountryService, private dataSharing:SharingService,private router:Router)
  {  

  }

  ngOnInit(): void {
   

  }
  
  
  public FindCountry() {
    this.svc.getCountry(this.inCountry)
    .subscribe(res=>{
     this.result = res;
     this.data = this.result.data;
    //  console.log(this.data[0].code);
    //  console.log(this.data[0].currencyCodes);
    //  console.log(this.data[0].name);
    //  console.log(this.data[0].wikiDataId);

      //to get the url's
      this.paging = this.result.metadata;
      this.link = this.result.links;
      
      //url's
      this.urlFirst ="https://wft-geo-db.p.mashape.com/"+ this.link[0].href;
      this.urlPre = "https://wft-geo-db.p.mashape.com/"+this.link[1].href;
      this.urlNext = "https://wft-geo-db.p.mashape.com/"+this.link[2].href;
      this.urlLast = "https://wft-geo-db.p.mashape.com/"+this.link[3].href;
    })
   
  }
  public OnSelect(countryCode:string)
  {
     this.dataSharing.changeData(countryCode);
    this.router.navigateByUrl("/CountryDetail");
  }

  GetFirst()
  {
   this.svc.getCountryWithLink(this.urlFirst)
    .subscribe(
      res=>{
        this.result = res;
        this.data = this.result.data;
      })
  }
  getLast()
  {
    console.log("called");
    this.svc.getCountryWithLink(this.urlLast)
    .subscribe(
      res=>{
        this.result = res;
        this.data = this.result.data;
      })
  }
  getNext()
  {
    this.svc.getCountryWithLink(this.urlNext)
    .subscribe(
      res=>{
        this.result = res;
        this.data = this.result.data;

         //to get the url's
        this.paging = this.result.metadata;
        this.link = this.result.links;
        
        //url's
        this.urlPre ="https://wft-geo-db.p.mashape.com/"+ this.link[1].href;
        this.urlNext = "https://wft-geo-db.p.mashape.com/"+this.link[2].href;
      })
  }
  getPrev()
  {
    this.svc.getCountryWithLink(this.urlPre)
    .subscribe(
      res=>{
        this.result = res;
        this.data = this.result.data;

         //to get the url's
        this.paging = this.result.metadata;
        this.link = this.result.links;
        
        //url's
        this.urlPre = "https://wft-geo-db.p.mashape.com/"+this.link[1].href;
        this.urlNext ="https://wft-geo-db.p.mashape.com/"+ this.link[2].href;
      })
  }

  // public OnPage(page:number)
  // {
  //   this.svc.getCountryWithParam(this.inCountry,)
  // }




}
