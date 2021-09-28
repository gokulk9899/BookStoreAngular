import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from '../../Cart/cart/cart.component';
import { LoginComponent } from '../../Account/login/login.component';
import { SignUpComponent } from '../../Account/sign-up/sign-up.component';
import { UploadBookComponent } from '../upload-book/upload-book.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('Search')
  searchBook!:NgForm;

  constructor(
    private loginDialogBox:MatDialog,
    private signUpDialogBox:MatDialog,
    private uploadBookDialogBox:MatDialog,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchBook);
  }

  loggedInUserName:any;
  
  loggedIn(){
    
    this.loggedInUserName = localStorage.getItem('userName');
    return localStorage.getItem('token');  

  }  

  logoutUser(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  openLoginBox(){
    console.log("Login Working");
    const loginDialogBoxConfig = new MatDialogConfig();
    loginDialogBoxConfig.width = '600px';
    loginDialogBoxConfig.height = '400px';
    this.loginDialogBox.open( LoginComponent,loginDialogBoxConfig);
  }

  openUploadBox(){
    console.log("Upload Working");
    const uploadDialogBoxConfig = new MatDialogConfig();
    uploadDialogBoxConfig.width = '600px';
    uploadDialogBoxConfig.height = '400px';
    this.uploadBookDialogBox.open(UploadBookComponent,uploadDialogBoxConfig);
  }

  openSignUpBox(){
    console.log("Signup working");
    const signUpDialogBoxConfig = new MatDialogConfig();
    signUpDialogBoxConfig.autoFocus=true;
    signUpDialogBoxConfig.width = '600px';
    signUpDialogBoxConfig.height = '400px';
    this.signUpDialogBox.open(SignUpComponent,signUpDialogBoxConfig);
  }

}
