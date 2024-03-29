import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSuscription? : Subscription;

  @Input()
  public initialValue : string = '';

  @Input()
  public placeholder : string = '';

  // Propiedad para cuando presiona enter
  @Output()
  public onValue : EventEmitter<string> = new EventEmitter();

  //Propiedad para cuando pasa un segundo sin escribir
  @Output()
  public onDebounce : EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(
      value => this.onDebounce.emit( value )
    );
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value : string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm : string){
    this.debouncer.next(searchTerm);
  }
}
