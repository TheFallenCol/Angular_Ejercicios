import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'm-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //Solo debe usarse cuando el usuario no navega en la misma página, debe salir y voler a entrar
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.activatedRoute.paramMap
      .subscribe(params => {
          let id = +params.get('id');
          console.log(id);
      });
  }

  onSubmit(){
    console.log('qu');

    this.router.navigate(['/followers'],{
      queryParams : { page:5, order:'oldest'}
    });
  }

}
