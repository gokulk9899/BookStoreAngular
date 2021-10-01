import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IBook } from 'src/app/Models/IBook.interface';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input()
  book_name!: IBook;


  constructor(private dialogBox:MatDialog) { }

  ngOnInit(): void {
  }

  openDialogBox(){
    console.log("im working");
    const dialogBoxConfig = new MatDialogConfig();
    dialogBoxConfig.width='600px';
    dialogBoxConfig.height='400px';
    dialogBoxConfig.data=this.book_name;
    let dialogRef = this.dialogBox.open(BookDetailsComponent,dialogBoxConfig);

  }

}
