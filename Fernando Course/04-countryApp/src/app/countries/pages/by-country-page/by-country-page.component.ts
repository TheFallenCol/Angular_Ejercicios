import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries : Country[] = [];
  public initialValue: string = '';

  constructor(private countriesServices : CountriesService){
  }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountries.term;
  }

  searchCountry(term: string):void {
    this.countriesServices.searchCountry(term).subscribe(
      countries =>
      {
        this.countries = countries;
      }
    );
  }

}
