import { Component, OnInit } from '@angular/core';

declare var moreButton: any;

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new moreButton();
  }

  title = 'app-js';
 
}
