import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [ HeavyLoadersFastComponent, TitleComponent ],
  templateUrl: './defer-option.component.html',
  styles: ``
})
export default class DeferOptionComponent {

  private router = inject(Router);

  example(){
    this.router.navigateByUrl('/user-list');
  }
}
