import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowerService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => {this.followers = followers
        console.log(followers);
      });
  }
}
