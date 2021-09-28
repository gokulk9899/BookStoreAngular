import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/Models/IBook.interface';
import { BookDisplayService } from '../services/book-display.service';

@Component({
  selector: 'app-latest-booklist',
  templateUrl: './latest-booklist.component.html',
  styleUrls: ['./latest-booklist.component.css']
})
export class LatestBooklistComponent implements OnInit {

  LatestBookList:Array<IBook>=[]

  constructor(private bookDisply:BookDisplayService) { }

  ngOnInit(): void {
    this.bookDisply.getLatestBooks().subscribe(
      data=>{
        this.LatestBookList=data;
      },error=>{
        console.log(error);
      }
    );
  }

}
