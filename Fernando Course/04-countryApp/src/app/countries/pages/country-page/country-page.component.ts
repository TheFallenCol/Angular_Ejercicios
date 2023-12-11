import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country? : Country;

  constructor( private activatedRoute : ActivatedRoute,
    private router: Router,
    private countryServices : CountriesService
    ){}

  ngOnInit(): void {
    //El switchMap sirve para retornar un observable diferente del que inicialmente se estaba esperando,
    //en este caso del observable de la ruta se usa su id y se llama el pais especifico que se requiere con dicho codigo
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countryServices.searchCountryByAlphaCode( id ))
    )
    .subscribe( ( country ) => {
      if( !country ) return this.router.navigateByUrl('');
      return this.country = country;
    });

    //ejemplo sin desestructurar
    // this.activatedRoute.params
    //   .subscribe( (params) => {
    //     console.log({ params : params['id'] });
    //   })

    //Se comentarea porque seria un llamado dentro de llamados
    // this.activatedRoute.params
    // .subscribe( ({id}) => {
    //   this.countryServices.searchCountryByAlphaCode(id)
    //   .subscribe(country => {
    //       console.log(country);
    //   });
    // });
  }
}
