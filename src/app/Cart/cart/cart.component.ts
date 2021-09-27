import { Component, OnInit } from '@angular/core';
import { BookDisplayService } from 'src/app/Bookstore/services/book-display.service';
import { IBook } from 'src/app/Models/IBook.interface';
import { ICart } from 'src/app/Models/ICart.interface';
import { UserCartService } from '../services/user-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTable : Array<ICart>=[];

  constructor(private orderDisplay:UserCartService) { }

  ngOnInit(): void {
    this.orderDisplay.getOrdersById().subscribe(
      data=>{
        console.log(data);
        console.log(data.values);
        this.cartTable = data;
      },error=>{
        console.log(error);
      }      
    )
  }

  displayedColumns:string[]=["Book Id","Book name","Quantity","Price","SubTotal","actions"];

}
