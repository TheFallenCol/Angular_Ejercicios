import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'shared-app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl mb-5">{{ title }} - {{ withShadow }}</h1>
  `,
  styles: ``
})
export class TitleComponent {

  @Input({
    required: true,
    // alias: 'DefaultText' //El Alias es por si se quiere que el campo se llame diferente en el selector
  })
  public title!: string;

  @Input({
    transform: booleanAttribute
  })
  public withShadow: boolean = false;

  constructor(){};
}
