import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n select pipe
  public name:string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[]= ['Maria','Daniel','David','Juan','Sebastian','Lilia','Juana','Felipe'];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person={
    name:'Oliver',
    age:'2',
    address:'Bogotá, Colombia'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data de la promesa');
      this.person.name = 'Nombre diferente';
    }, 3500);
  });
}
