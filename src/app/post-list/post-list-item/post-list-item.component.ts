import { Post } from './../../../shared/types/post';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  posts: Post[];
  @Input() key: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  constructor() {

  }

  ngOnInit() {

  }
  love(isInLove: boolean): void {
    let index = 0;
    for (let post of PostService.posts) {
      if (post.key === this.key) {
        if (isInLove) {
          PostService.posts[index].countLove++;
        }
        else {
          PostService.posts[index].countLove--;
        }
      }
      index++;
    }
  }
}