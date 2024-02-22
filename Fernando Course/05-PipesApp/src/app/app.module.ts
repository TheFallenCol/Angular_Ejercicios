import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RippleModule } from 'primeng/ripple';
import { SharedModule } from './shared/shared.module';

//Configuracion de idiomas del aplicativo
import localEsCOL from '@angular/common/locales/es-CO';
import localFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from "@angular/common";


registerLocaleData( localEsCOL );
registerLocaleData( localFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RippleModule
  ],
  providers: [
    //Cambia de manera global el lenguaje de los locals
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
