import { FavoriteChangedEvent } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post ={
    title:"Ejercicio Angular",
    isFavorite: true
  }

  onFavoriteChange(eventArgs : FavoriteChangedEvent){
    console.log("Favorite Changed: " + eventArgs.newValue);
  }
}