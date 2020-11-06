import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'm-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    //Solo debe usarse cuando el usuario no navega en la misma página, debe salir y voler a entrar
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.route.paramMap
      .subscribe(params => {
          let id = +params.get('id');
          console.log(id);
      });

  }

}
