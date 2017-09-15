import { Component, OnInit } from '@angular/core';
import { Post } from './post-model';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  post: Post[];

  constructor() { }

  ngOnInit() {
  }

}
