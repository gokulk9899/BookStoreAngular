import { HttpClient,HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { IBook } from 'src/app/Models/IBook.interface';

@Injectable({
  providedIn: 'root'
})

export class BookDisplayService {

  

  constructor(private http:HttpClient) { }
  
  getBestSellerBooks(){
    return this.http.get('Data/bestSellerBooks.json')
    //return this.http.get('https://localhost:44336/api/Book/GetBestSellerBooks')
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
}
