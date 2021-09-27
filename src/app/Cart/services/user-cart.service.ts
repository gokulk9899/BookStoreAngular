import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from 'src/app/Models/ICart.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor(private http:HttpClient) { }

  

  getOrdersById(){
    return this.http.get('Data/cartorders.json')
    //return this.http.get('https://localhost:44336/api/Book/GetBestSellerBooks')
    .pipe(
      map(        
      ( data: any) => {  
            const orderDetails:Array<ICart> = [];
            for(var item of data){
                orderDetails.push(item);
            }
            return orderDetails;
          }
      )
    );
  }
}
