import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit{

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm : FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  constructor(
      private fb: FormBuilder,
      private countriesService: CountriesService
    ){
  }

  get regions(): Region[]{
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  onRegionChanged(): void{
    this.myForm.get('region')!.valueChanges
      .pipe(
        tap( () => this.myForm.get('country')!.setValue('')),
        // Cuando se tiene un caso en e·que el argumento se manda de argumento a la función se puede usar la linea comentada, es lo mismo que la que no está comentareada
        // switchMap( this.countriesService.getCountriesByRegion )
        switchMap( region => this.countriesService.getCountriesByRegion(region) )
      )
      .subscribe( countries => {
        this.countriesByRegion = countries.sort( (a, b) => a.name.localeCompare(b.name) );
      });
  }

  onCountryChanged(): void{
    this.myForm.get('country')!.valueChanges
      .pipe(
        tap( () => this.myForm.get('border')!.setValue('')),
        //Si se cumple la condición del filter continua con la siguiente instrucción, el value es el valor seleccionado en el country, como al inicio es '' el lenght es de 0, si se llega a seleccionar es mayor a 0
        filter((value : string) => value.length > 0),
        switchMap( alphaCode => this.countriesService.getCountryByAlphaCode( alphaCode )),
        // Cuando se tiene un caso en e·que el argumento se manda de argumento a la función se puede usar la linea comentada, es lo mismo que la que no está comentareada
        // switchMap( this.countriesService.getCountryByAlphaCode )
        switchMap(( country ) => this.countriesService.getCountryBordersByCodes( country.borders ))
      )
      .subscribe( countries => {
        this.borders = countries;
        // this.countriesByRegion = countries.sort( (a, b) => a.name.localeCompare(b.name) );
      });
  }

  onSubmit():void {
  }
}
