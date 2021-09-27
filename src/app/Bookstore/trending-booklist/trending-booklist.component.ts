import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-booklist',
  templateUrl: './trending-booklist.component.html',
  styleUrls: ['./trending-booklist.component.css']
})
export class TrendingBooklistComponent implements OnInit {

  TrendBookList:Array<any>=[
    {
      "bookId":1,
      "category":"science",
      "price":500,
    },
    {
      "bookId":1,
      "category":"science",
      "price":500,
    },
    {
      "bookId":1,
      "category":"science",
      "price":500,
    }    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
