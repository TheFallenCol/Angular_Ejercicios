import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl : string = 'https://restcountries.com/v3.1';
  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(private http : HttpClient) {
  }

  get regions(): Region[] {
    //... Se llama spread, busca copiar el objeto sin hacer la referencia al objeto original
    return [...this._regions]
  }

  getCountriesByRegion( region: Region ): Observable<SmallCountry[]> {

    if( !region ) return of([]);

    const url = `${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => {
          return countries.map( country => ({
            name: country.name.common,
            cca3: country.cca3,
            //operador de covalencia nula, evalua y si es nulo devuelve el vacio
            borders: country.borders ?? []
          }))
        })
      );
  }

  getCountryByAlphaCode( alphaCode: string ) : Observable<SmallCountry>{

    const url = `${this.baseUrl}/alpha/${ alphaCode }?fields=cca3,name,borders`

    return this.http.get<Country>( url )
      .pipe(
        map( country => {
          return ({
            name: country.name.common,
            cca3: country.cca3,
            borders: country.borders ?? []
          });
        })
      );
  }

  getCountryBordersByCodes( borders: string[]): Observable<SmallCountry[]>{

    if( !borders || borders.length === 0) return of ([]);

    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push( request );
    });

    return combineLatest( countriesRequests );
  }
}
