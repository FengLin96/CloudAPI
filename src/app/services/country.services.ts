import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CountryService {
    constructor(private http: HttpClient) 
    { 

    }

    getCountry(contryPrefix:string):Observable<ICountry>{
       var url =  `https://wft-geo-db.p.mashape.com/v1/geo/countries?namePrefix=${contryPrefix}`;
       const headers = new HttpHeaders()    
       .set("X-Mashape-Key", "w4stvsB6yJmsheFu7OIQao5B4WyPp1QPsaTjsnFX7Iytb2Pyuw")
       .set("X-Mashape-Host", "wft-geo-db.p.mashape.com");


       return this.http.get<ICountry>(url,{headers:headers});      
    }

    getCountryWithParam(contryPrefix:string,offset:number):Observable<ICountry>{
      var url =  `https://wft-geo-db.p.mashape.com/v1/geo/countries?offset=${offset}&limit=5&namePrefix=${contryPrefix}`;
      const headers = new HttpHeaders()    
      .set("X-Mashape-Key", "w4stvsB6yJmsheFu7OIQao5B4WyPp1QPsaTjsnFX7Iytb2Pyuw")
      .set("X-Mashape-Host", "wft-geo-db.p.mashape.com");
      return this.http.get<ICountry>(url,{headers:headers});      
   }

   getCountryWithLink(url:string):Observable<ICountry>{

    const headers = new HttpHeaders()    
    .set("X-Mashape-Key", "w4stvsB6yJmsheFu7OIQao5B4WyPp1QPsaTjsnFX7Iytb2Pyuw")
    .set("X-Mashape-Host", "wft-geo-db.p.mashape.com");
    return this.http.get<ICountry>(url,{headers:headers});      
 }

    getCountryDetail(countryID:string):Observable<IRootObjDetail>{
      var url =  `https://wft-geo-db.p.mashape.com/v1/geo/countries/${countryID}`;
      // console.log(url);
      const headers = new HttpHeaders()    
      .set("X-Mashape-Key", "w4stvsB6yJmsheFu7OIQao5B4WyPp1QPsaTjsnFX7Iytb2Pyuw")
      .set("X-Mashape-Host", "wft-geo-db.p.mashape.com");


      return this.http.get<IRootObjDetail>(url,{headers:headers}); 
    
    }
}



export interface ICountry {
  data: IData[];
  links: ILink[];
  metadata: IPaging;
}

export interface IPaging {
  currentOffset: number;
  totalCount: number;
}
export interface ILink {
  rel: string;
  href: string;
}
export interface IData {
  code: string;
  currencyCodes: string[];
  name: string;
  wikiDataId: string;
}

export interface IRootObjDetail{
  data:ICountryDetail;
}

export interface ICountryDetail {
  code: string;
  currencyCodes: string[];
  flagImageUri: string;
  name: string;
  numRegions: number;
  wikiDataId: string;
}