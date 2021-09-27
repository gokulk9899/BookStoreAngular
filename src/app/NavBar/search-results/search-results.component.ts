import { Component, OnInit } from '@angular/core';
import { BookDisplayService } from 'src/app/Bookstore/services/book-display.service';
import { IBook } from 'src/app/Models/IBook.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  MatchBookList: Array<IBook> = [];

  constructor(private searchResults:BookDisplayService) { }

  ngOnInit(): void {
    this.searchResults.getBestSellerBooks().subscribe(
      data=>{
        this.MatchBookList = data;
      },
      error=>{
        console.log(error);
      }
      
    );
  }

}
