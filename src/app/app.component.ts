import { PostService } from 'src/shared/services/post.service';
import { Post } from './../shared/types/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[];

  constructor(private postService: PostService) {
    this.posts = postService.list();
  }

};
