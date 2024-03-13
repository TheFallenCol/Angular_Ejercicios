import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'site-menu',
  templateUrl: './site-menu.component.html',
  styleUrl: './site-menu.component.css'
})
export class SiteMenuComponent {

  public menuItems = signal<MenuItem[]>([
      { title: 'Contador', route: 'counter' },
      { title: 'Usuario', route: 'user-info' },
      { title: 'Mutaciones', route: 'properties' },
    ]);

  // Manera tradicional
  // public menuItems : MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ];

}
