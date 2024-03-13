import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement? : ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color( value: string ){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined ){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement =  el;

    // Modificar el HTML del elemento
    // this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
  }

  ngOnInit(): void {
  }

  setStyle(): void {
    if( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if( !this.htmlElement ) return;
    if( !this._errors ) {
      this.htmlElement.nativeElement.innerHTML = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if( errors.includes('required') ){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    var innerHTML: string = '<ul class="list-group">';

    errors.forEach( error => {
      switch( error ){
        case 'minlength': {
          innerHTML = innerHTML + `<li class="list-group-item">Mínimo ${ this._errors!['minlength'].requiredLength }/${ this._errors!['minlength'].actualLength } caracteres </li>`
          break;
        }
        case 'email': {
          innerHTML = innerHTML + '<li class="list-group-item">El campo no tiene un formato de correo electrónico válido </li>'
          break;
        }
        default: break;
      }
    });

    innerHTML = innerHTML + '</ul>'
    this.htmlElement.nativeElement.innerHTML = innerHTML;
  }
}
