import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/Account/services/account.service';
import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {

  uploadbookForm!: FormGroup;

  constructor(private addBook:NavBarService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.uploadbookForm=new FormGroup({
      // {[bookTitle authorName details price category file]
    
      bookTitle: new FormControl("Your name",[Validators.required]),
      authorName: new FormControl("Your name",[Validators.required]),
      category: new FormControl("Your name",[Validators.required]),
      details: new FormControl("Your name",[Validators.required]),
      price: new FormControl("Your name",[Validators.required]),
      image: new FormControl(null,[Validators.required])
      }
    )
  }

  onSubmit(){
    console.log("reactive");
    console.log(this.uploadbookForm.value);
    this.addBook.uploadNewBook(this.uploadbookForm.value).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
    this.snackBar.open("Signed Up SuccessFully!","",{duration:3000})
  }


}
