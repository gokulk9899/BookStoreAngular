import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-booklist',
  templateUrl: './latest-booklist.component.html',
  styleUrls: ['./latest-booklist.component.css']
})
export class LatestBooklistComponent implements OnInit {

  LatestBookList:Array<any>=[
    {
      "bookId":1,
      "category":"science",
      "price":500,
    },
    {
      "bookId":5,
      "category":"science",
      "price":500,
    },
    {
      "bookId":4,
      "category":"science",
      "price":500,
    },
    {
      "bookId":2,
      "category":"science",
      "price":500,
    },
    {
      "bookId":2,
      "category":"science",
      "price":500,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
