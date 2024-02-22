import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

  public hero? : Hero;

  constructor(private heroService: HeroesService, private activadedRoute : ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.activadedRoute.params
      .pipe(
        //Se hace destructuracion de los parametros, ya que lo que recibe el switchMap son los parametros de la URL dentro de estos
        //existe el parametro id que es el que se trae para después hacer un llamado por id
        switchMap( ({id}) => this.heroService.getHeroById( id ))
      )
      .subscribe(
        hero => {
          if(!hero) return this.router.navigate(['/heroes/list']);
          this.hero = hero;
          return;
        }
      );
  }

  goBack():void{
    this.router.navigateByUrl('/heroes/list');
  }
}
