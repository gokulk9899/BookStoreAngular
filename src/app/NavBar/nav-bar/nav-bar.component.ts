import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UploadBookComponent } from '../upload-book/upload-book.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private cartDialogBox:MatDialog,
    private loginDialogBox:MatDialog,
    private signUpDialogBox:MatDialog,
    private uploadBookDialogBox:MatDialog
    ) { }

  ngOnInit(): void {
  }

  openCartBox(){
    console.log("Working cart");
    const cartDialogBoxConfig = new MatDialogConfig();
    cartDialogBoxConfig.width = '600px';
    cartDialogBoxConfig.height = '400px';
    this.cartDialogBox.open(CartComponent,cartDialogBoxConfig);
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
