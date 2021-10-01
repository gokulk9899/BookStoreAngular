import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ILoginUser, IResponseUser, IUser } from 'src/app/Models/IUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  loginUser(user:ILoginUser){
    return this.http.post("https://localhost:44336/api/Account/Login",user).pipe(
      map(
        (data:any)=>{
          const response : IResponseUser = data;
          return response;
        }
      )
    );
  }

  signUpUser(signInUser:IUser){
    console.log(signInUser);
    return this.http.post("https://localhost:44336/api/Account/SignUp",signInUser).pipe(
      map(
        (response)=>{
          return response;          
        }
      )
    );
  }
}
