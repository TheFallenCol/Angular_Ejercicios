import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  posts: any[];  
  posts2: PostCall[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { 
    http.get(this.url)
      .subscribe(response =>{
        this.posts = (response as PostCall[])
        console.log(response);
      }, error => {
        console.log(error.json())
      });

    http.get<PostCall[]>(this.url)
    .subscribe(response =>{
      this.posts2 = response;
      console.log(this.posts.length);
    }, error => {
      console.log(error.json())
    });
  }

  createPost(input: HTMLInputElement){
    let post = { title : input.value };

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response =>{
        post['id'] = response['id'];
        this.posts.splice(0,0,post);
        input.value = '';
      });
  }

  updatePost(post : PostCall){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post : PostCall){
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response =>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1)
        });
  }

}

class PostCall{
  userId: number;
  id: number;
  title: string;
  body: string;
}
