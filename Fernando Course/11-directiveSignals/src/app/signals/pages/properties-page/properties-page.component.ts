import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request';

@Component({
  selector: 'pages-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit, OnDestroy{

  public counter = signal(10);

  public user = signal<User>({
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  });

  public fullName = computed( () => `${this.user().first_name } ${this.user().last_name}` );

  public userChangedEffect = effect(() => {
    console.log( `${ this.user().first_name } - ${ this.counter() }` );
  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1);
    }, 10000);
  }

  ngOnDestroy(): void {
    // En caso de querer eliminar el llamado, esto lo hace automáticamente angular, pero en caso de querer hacerlo se puede quitar el efecto
    // this.userChangedEffect.destroy();
  }

  onFieldUpdated( field: keyof User, value: string ) : void{

    //Manera 1
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    //Manera 2
    // this.user.update( ( current ) => ({
    //   ...current,
    //   [field] : value,
    // }))

    //Manera 3
    this.user.update( ( current ) => {

      switch( field ){
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number( value );
          break;
      }

      return current;
    })
  }

  increaseBy( value: number ): void {
    this.counter.update( current => current + value);
  }
}
