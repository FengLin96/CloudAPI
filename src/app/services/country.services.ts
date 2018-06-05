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
}

export interface ICountry {
  data: IData[];
  metadata: IMetadata;
}

export interface IMetadata {
  currentOffset: number;
  totalCount: number;
}

export interface IData {
  code: string;
  currencyCodes: string[];
  name: string;
  wikiDataId: string;
}