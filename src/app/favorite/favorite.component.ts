import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected : boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected=!this.isSelected;
    this.click.emit(<FavoriteChangedEvent>{ newValue : this.isSelected});
  }
}

export interface FavoriteChangedEvent{
  newValue : boolean;
}