import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('Form')
  submittedForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("message");
    console.log(this.submittedForm);
  }

}
