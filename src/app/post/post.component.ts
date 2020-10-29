import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Object;

  constructor(http : HttpClient) { 
    http.get<PostCall[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response =>{
        this.posts = response;
        console.log(this.posts);
        console.log(response.length);
      }, error => {
        console.log(error.json())
      });
  }

  ngOnInit(): void {
  }

}

class PostCall{
  userId: number;
  id: number;
  title: string;
  body: string;
}
