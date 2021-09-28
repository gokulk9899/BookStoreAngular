import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/Models/IBook.interface';
import { BookDisplayService } from '../services/book-display.service';

@Component({
  selector: 'app-trending-booklist',
  templateUrl: './trending-booklist.component.html',
  styleUrls: ['./trending-booklist.component.css']
})
export class TrendingBooklistComponent implements OnInit {

  TrendBookList:Array<IBook>=[]

  constructor(private bookDisplay:BookDisplayService) { }

  ngOnInit(): void {
    this.bookDisplay.getTrendingBooks().subscribe(
      data=>{
        this.TrendBookList = data;
      },error=>{
        console.log(error);
      }
    );
  }

}
