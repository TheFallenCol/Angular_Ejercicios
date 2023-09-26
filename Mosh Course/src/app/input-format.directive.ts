import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  @Input('newParamTest') paramTest;

  //ElementRef -> Información que viene del DOM de la aplicacion, tiene los atributos del objeto
  constructor(private el: ElementRef) { }

  //blur -> Evento del DOM
  @HostListener('blur') onBlur(){
    //Valo del elemento en el DOM, todos los atributos son los del DOM
    let value: string = this.el.nativeElement.value;
    
    console.log(this.format);
    console.log(this.paramTest);
    console.log(this.el.nativeElement.style);

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
