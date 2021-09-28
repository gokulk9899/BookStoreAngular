import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerationForm!: FormGroup;
  constructor(private createUser:AccountService) { }

  ngOnInit(): void {
    this.registerationForm=new FormGroup(
      {
        userName: new FormControl("Your name",[Validators.required]),
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required,Validators.minLength(9)])
      }
    )
  }

  onSubmit(){
    console.log("reactive");
    console.log(this.registerationForm.value);
    this.createUser.signUpUser(this.registerationForm.value).subscribe(
      data=>{
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
  }

}
