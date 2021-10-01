import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook, IBookRating } from 'src/app/Models/IBook.interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from 'src/app/Account/login/login.component';
import { NavBarComponent } from 'src/app/NavBar/nav-bar/nav-bar.component';
import { BookDisplayService } from '../services/book-display.service';
import { ICart } from 'src/app/Models/ICart.interface';
import { retry } from 'rxjs/operators';
import { MatSliderChange } from '@angular/material/slider';

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
  console.log(this.rating);
  }



  rating:any =0;

  formatLabel(value: number) {
    //console.log(this.data.bookId)
    return value;
  }

  value=this.data.rating;
  checkSlideChange=false

  checkLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
    this.rating=event.value;
    this.checkSlideChange=true;
  }
  
  updateRating(){
    console.log(this.rating);
    if(this.data.rating!=this.rating){
      console.log("change it");
      const rateUpdate:IBookRating={
        bookId:this.data.bookId,
        rating:this.rating
      }
      this.addToCart.updateRating(rateUpdate);

    }
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
      this.snackBar.open("Added to cart Successfully!","",{duration:2000});
    }
  }

  

  


}
