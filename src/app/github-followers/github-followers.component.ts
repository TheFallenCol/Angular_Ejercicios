import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'm-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route : ActivatedRoute, private service: GithubFollowerService) { }

  ngOnInit() {

    //this.route.paramMap -> se pone como ejemplo, para este caso no hay una url de la siguiente forma followers/54545?page=1&order=newest
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {        
        console.log(combined[0].get('id'));
        console.log(combined[1].get('page'));

        return this.service.getAll();         
      })
    )
    .subscribe( followers => this.followers = followers );    
  }
}
