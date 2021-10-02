import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/Models/IBook.interface';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-category-book',
  templateUrl: './category-book.component.html',
  styleUrls: ['./category-book.component.css']
})
export class CategoryBookComponent implements OnInit {
  bookList: Array<IBook> = [];
   categoryList:Array<string>=[];
  model:string='';

  constructor(private bookDisplay:NavBarService) { }

  ngOnInit(): void {
    this.bookDisplay.getAllBooks().subscribe(
      data=>{
        this.bookList = data;
        for(let item of this.bookList){
          if(!this.categoryList.includes(item['category']))
          this.categoryList.push(item['category']);
        }
      },error=>{
        console.log(error);
      }      
    );
    
    
  }
  
}
