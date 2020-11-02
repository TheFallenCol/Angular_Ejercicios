import { BadRequestError } from './../common/bad-input';
import { NotFoundError } from '../common/not-found';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  posts: any[];  
    
  constructor(private postService : PostService){ 
  }

  ngOnInit(){
    this.postService.getAll()
      .subscribe(
        response =>{
          this.posts = (response as PostCall[])
          console.log(response);
        });
  }

  createPost(input: HTMLInputElement){
    let post = { title : input.value };

    this.postService.create(post)
    .subscribe(
      response =>{
        post['id'] = response['id'];
        console.log(response['id']);
        this.posts.splice(0,0,post);
        input.value = '';
      }, 
      error => {
        if(error instanceof BadRequestError)
          console.log(error.originalError.message);
        else throw error;
      });
  }

  updatePost(post : PostCall){
    this.postService.update(post)
    .subscribe(
      response => {
        console.log(response);
      });
  }

  deletePost(post : PostCall){
    this.postService.delete(post.id)
    .subscribe(
      response =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);        
      }, 
      (error: AppError) => {        
        if(error instanceof NotFoundError)
          console.log(error.originalError.message);        
        else throw error;
      });
  }
}

export class PostCall{
  userId: number;
  id: number;
  title: string;
  body: string;
}
