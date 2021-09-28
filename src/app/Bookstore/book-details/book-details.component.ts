import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/Models/IBook.interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from 'src/app/Account/login/login.component';
import { NavBarComponent } from 'src/app/NavBar/nav-bar/nav-bar.component';
import { BookDisplayService } from '../services/book-display.service';
import { ICart } from 'src/app/Models/ICart.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IBook,
            private snackBar:MatSnackBar,
            private navBarRoute:NavBarComponent,
            private addToCart:BookDisplayService) { }

  ngOnInit(): void {
    console.log(this.data.bookId);
  }

  onClickBuyNow(){
    console.log("buynow");
    if(!localStorage.getItem('token')){
      var snackBarRef = this.snackBar.open("Login to Buy!","Login",{duration:3000});
      snackBarRef.onAction().subscribe(
        ()=>{
          this.navBarRoute.openLoginBox();
          console.log("working");
        }
      );
    }
    else{
      this.snackBar.open("Thank you buying!","",{duration:3000});
    }     
    
  }

  


  onClickAddToCart(){
    console.log("add to cart");
    const orderBook:ICart = {
      userId: 0,
      bookId:this.data.bookId,
      bookTitle:this.data.bookTitle,
      quantity:0,
      price : this.data.price
    }    
   
    if(!localStorage.getItem('token')){// this to check wheather user is logged in
      var snackBarRef = this.snackBar.open("Login to add to cart!","Login",{duration:3000});
      snackBarRef.onAction().subscribe(
        ()=>{
          this.navBarRoute.openLoginBox();
          console.log("working");
        }
      );
    }
    else{
      console.log(orderBook);
      this.addToCart.addToCart(orderBook);//after this...
    }
  }

  

  


}
