import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {map} from 'rxjs/operators';
import { IBook, IBookRating } from 'src/app/Models/IBook.interface';
import { ICart } from 'src/app/Models/ICart.interface';

@Injectable({
  providedIn: 'root'
})

export class BookDisplayService {

  

  constructor(private http:HttpClient,private snackBar:MatSnackBar) { }
  
  getBestSellerBooks(){
    //return this.http.get('Data/bestSellerBooks.json')
    return this.http.get('https://localhost:44336/api/Book/GetBestSellerBooks')
    .pipe(
      map(        
      ( data: any) => {  
            const booksList:Array<IBook> = [];
            for(var item of data){
                booksList.push(item);
            }
            return booksList;
          }
      )
    );
  }

  getTrendingBooks(){
    //return this.http.get('Data/bestSellerBooks.json')
    return this.http.get('https://localhost:44336/api/Book/GetTrendingBooks')
    .pipe(
      map(        
      ( data: any) => {  
            const booksList:Array<IBook> = [];
            for(var item of data){
                booksList.push(item);
            }
            return booksList;
          }
      )
    );
  }

  getLatestBooks(){
    //return this.http.get('Data/bestSellerBooks.json')
    return this.http.get('https://localhost:44336/api/Book/GetLatestBooks')
    .pipe(
      map(        
      ( data: any) => {  
            const booksList:Array<IBook> = [];
            for(var item of data){
                booksList.push(item);
            }
            return booksList;
          }
      )
    );
  }

  addToCart(orderBook:ICart){
    // it come here...
    const headerOptions = {
      headers:new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    console.log(orderBook);//logs the data
    //console.log("inga vantan");//logs this too..
    // return this.http.get('https://localhost:44336/api/Book/GetLatestBooks');
    
    return this.http.post('https://localhost:44336/api/Order/AddToCart',orderBook,headerOptions).subscribe(
      {
        next:data=>{
          console.log(data);
        },
        error:error=>{
          console.log(error);
        }
      }
    );
   }

   updateRating(rateBook:IBookRating){
    return this.http.patch('https://localhost:44336/api/Book/UpdateBook',rateBook).subscribe(
      {
        next:data=>{
          console.log(data);
        },
        error:error=>{
          console.log(error);
        }
      }
    );

   }


}
