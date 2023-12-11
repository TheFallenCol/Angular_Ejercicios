import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(private countriesServices : CountriesService){
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
