import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, //Para que esté pendiente en menos puntos de cambio de la aplicacion
  template: `
    <shared-app-title [title]="currentFramework()"/>
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed( () =>
    `Change Detection - ${ this.frameworkAsSignal().name }`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    release: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    release: 2016
  };

  constructor(){
    setTimeout( () => {

      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }));

      // Metodo 2 para modificar el objeto de la señal
      // this.frameworkAsSignal.update( value => {
      //   value.name = 'Cambio';
      //   return { ...value };
      // });

      this.frameworkAsProperty.name = 'VueJS';


      console.log('Done', { signal: this.frameworkAsSignal() });
    }, 3000);
  }

}
