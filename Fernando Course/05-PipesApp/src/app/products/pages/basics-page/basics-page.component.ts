import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = "texto base en minúscula";
  public nameUpper: string = "TEXTO BASE EN MAYÚSCULA";
  public fullName: string = "TeXtO EjeMPLO En CamELCase";

  public customDate : Date = new Date();

}
