import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,interval, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookDisplayService } from 'src/app/Bookstore/services/book-display.service';
import { IBook } from 'src/app/Models/IBook.interface';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit,OnChanges {
  

  constructor(private findBooks:NavBarService,private route:Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
  }


  fetchedBooks:Array<IBook>=[];

  checkLocalStorage(){
    return localStorage.getItem('searchBook');
  }

  subscription: Subscription = new Subscription;

  ngOnInit(): void {
    console.log("hai");
    this.findBooks.getRelatedBooks().subscribe(
      (data:any)=>{
        this.fetchedBooks=data;
      },error=>{
        console.log(error);
      }
    );  
   
    
  }




 
  

}
