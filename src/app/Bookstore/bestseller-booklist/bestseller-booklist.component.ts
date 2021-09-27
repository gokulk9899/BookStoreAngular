import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/Models/IBook.interface';
import { BookDisplayService } from '../services/book-display.service';

@Component({
  selector: 'app-bestseller-booklist',
  templateUrl: './bestseller-booklist.component.html',
  styleUrls: ['./bestseller-booklist.component.css']
})
export class BestsellerBooklistComponent implements OnInit {
  BestBookList: Array<IBook> = [];

  constructor(private bookDisplay:BookDisplayService) { }

  ngOnInit(): void {
    this.bookDisplay.getBestSellerBooks().subscribe(
      data=>{
        console.log(data);
        this.BestBookList = data;
      },error=>{
        console.log(error);
      }
      
    )
  }

}
