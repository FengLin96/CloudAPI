import { Component, OnInit } from '@angular/core';
import { ICountryDetail, CountryService, IRootObjDetail } from '../services/country.services';
import { SharingService } from '../services/sharing.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  result:IRootObjDetail;
  countryDetail:ICountryDetail;
  countryID:string;
  inCountryID:string;
  constructor(private svc:CountryService,private dataSharing:SharingService) { }

  ngOnInit() {
    this.dataSharing.currentData.subscribe(
      res => {
        this.countryID = res;
        console.log(this.countryID);

        // als er een valide id is
        if(this.countryID != "no")
        {
          this.svc.getCountryDetail(this.countryID)
          .subscribe(res => {
            this.result = res;
            this.countryDetail = this.result.data;
            console.log(this.result);
            console.log(this.countryDetail.code);
            console.log(this.countryDetail.currencyCodes);
            console.log(this.countryDetail.flagImageUri);
            console.log(this.countryDetail.name);
            console.log(this.countryDetail.numRegions);
            console.log(this.countryDetail.wikiDataId);
          })

        }
      }
    )
  }

  getCountryDetail(id:string)
  {
    this.svc.getCountryDetail(id)
          .subscribe(res => {
            this.result = res;
            this.countryDetail = this.result.data;
          })
  }

}
