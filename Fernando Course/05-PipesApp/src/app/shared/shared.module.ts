import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    ButtonModule,
    PrimeNgModule,
    CommonModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
