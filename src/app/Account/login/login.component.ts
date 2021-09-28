import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ILoginUser, IResponseUser } from 'src/app/Models/IUser.interface';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('Form')
  submittedForm!: NgForm;
  constructor(private loginService:AccountService,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.submittedForm.value);
    
    this.loginService.loginUser(this.submittedForm.value).subscribe(
      (response:IResponseUser)=>{
        console.log(response);
        localStorage.setItem('token',response.token);
        localStorage.setItem('userName',response.userName);
      }
    );

    setTimeout(
      ()=>{
        if(localStorage.getItem('token')){
            this.snackBar.open("Login Succcessful!","",{duration: 2000});
            this.router.navigate(['/bookStore']);
        }
        else{
            this.snackBar.open("Invalid login","Try again",{duration: 2000});
        }
      },
      2000);
      }


}
