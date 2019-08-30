import { Injectable } from '@angular/core';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  static posts: Post[];
  constructor() {
    PostService.posts = [{
      key: 1,
      title: 'Mon premier post',
      content: 'Lorem Elsass ipsum wurscht Salut bisamme Richard Schirmeck sagittis consectetur turpis vulputatamet, chambon salu yeuh. ornare semper mollis Christkindelsmärik ac Mauris eget adipiscing Gal ! so hoplapellentesque Coopé de Truchtersheim Morbi nullam ante sit risus',
      countLove: 0,
      dateCreation: new Date()
    }, {
      key: 2,
      title: 'Mon deuxième post',
      content: 'LoFrem Elsass ipsum wurscht Salut bisamme Richard Schirmeck sagittis consectetur turpis vulputatamet, chambon salu yeuh. ornare semper mollis Christkindelsmärik ac Mauris eget adipiscing Gal ! so hoplapellentesque Coopé de Truchtersheim Morbi nullam ante sit risus',
      countLove: 0,
      dateCreation: new Date()
    }, {
      key: 3,
      title: 'Mon troisième post',
      content: 'LoFrem Elsass ipsum wurscht Salut bisamme Richard Schirmeck sagittis consectetur turpis vulputatamet, chambon salu yeuh. ornare semper mollis Christkindelsmärik ac Mauris eget adipiscing Gal ! so hoplapellentesque Coopé de Truchtersheim Morbi nullam ante sit risus',
      countLove: 0,
      dateCreation: new Date()
    }
    ];
  }
  list(): Post[] {
    return PostService.posts;
  }
}
