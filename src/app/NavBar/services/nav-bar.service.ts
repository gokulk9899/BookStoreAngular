import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IBook, IBookUpload } from 'src/app/Models/IBook.interface';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(private http:HttpClient) { }

  getRelatedBooks(){
    const bookName ='/'+localStorage.getItem('searchBook');
    console.log(bookName);

    return this.http.get("https://localhost:44336/api/Book/SearchBooks"+bookName)
    .pipe(
      map(        
        ( data:any) => {  
              const booksList:Array<IBook> = [];
              
              for(var item of data){
                  booksList.push(item);
              }
              console.log(booksList);
              return booksList;
            }
        )
      );
  }

  uploadNewBook(book:IBookUpload){
    console.log(book);
    return this.http.post("https://localhost:44336/api/Book/Upload",book).pipe(
      map(
        (response)=>{
          return response;          
        }
      )
    );
  }

  getAllBooks(){
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
}
