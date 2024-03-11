import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price : number = 0;

  //El caracter $ se usa como buena practica para identificar los observables
  public interval$ ? : Subscription;

  ngOnInit(): void {
    console.log('PriceComponent -> ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log( `Tick: ${value}` ));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent -> ngOnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    console.log('PriceComponent -> ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
