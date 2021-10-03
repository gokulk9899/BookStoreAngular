import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { AccountService } from 'src/app/Account/services/account.service';
import { NavBarService } from '../services/nav-bar.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {

  uploadbookForm!: FormGroup;

  imgSrc:string="/assets/Images/bookFrontPage.jpg";
  selectedImage:any = null;

  constructor(private addBook:NavBarService,private snackBar:MatSnackBar,private storage:AngularFireStorage) { }

  ngOnInit(): void {
    this.uploadbookForm=new FormGroup({    
      bookTitle: new FormControl(null,[Validators.required]),
      authorName: new FormControl(null,[Validators.required]),
      category: new FormControl(null,[Validators.required]),
      details: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      image: new FormControl(null,[Validators.required])
      }
    )
  }

  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any)=>{
        this.imgSrc = e.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else{
      this.imgSrc = "/assets/Images/bookFrontPage.jpg";
      this.selectedImage = null;
    }
  }

  onSubmit(){
    console.log("reactive");
    if(this.uploadbookForm.valid){
      console.log(this.uploadbookForm.value);
      
      

      var filepath = `${this.uploadbookForm.value['category'] }/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filepath);
      this.storage.upload(filepath,this.selectedImage).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            this.uploadbookForm.value['image'] = url;
            this.addBook.uploadNewBook(this.uploadbookForm.value).subscribe(
              data=>{
                console.log(data);
              },error=>{
                console.log(error);
              }
            );
          })
        })
      ).subscribe();

      console.log(this.uploadbookForm.value);
    
    
    this.snackBar.open("Book added SuccessFully!","",{duration:3000})
    }
    else{
      console.log("invalid form");
    }

    console.log("after");
    console.log(this.uploadbookForm.value);
  }


}
