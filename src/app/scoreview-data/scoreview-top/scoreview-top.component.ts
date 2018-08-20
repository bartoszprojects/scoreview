import { Component, OnInit } from '@angular/core';
import {DataService} from "../../app.service";
import {Observable} from "rxjs";
import {Post} from "../../interface";

import { AppComponent } from "../../app.component"


@Component({
  selector: 'app-scoreview-top',
  templateUrl: './scoreview-top.component.html',
  styleUrls: ['./scoreview-top.component.sass']
})
export class ScoreviewTopComponent implements OnInit {
  posts;
  abc;
  allPosts$ : Observable<Array<Post>>;

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.loadData()
  }
  loadData() : void{
    this.DataService.getData().subscribe((posts) => {
      this.posts = posts;

      var someString: string = this.posts;
      var jsonObject : any = JSON.parse(someString);

      this.abc = jsonObject;
    });
  }

}
