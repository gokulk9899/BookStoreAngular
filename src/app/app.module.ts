import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCollectionComponent } from './Bookstore/book-collection/book-collection.component';
import { TrendingBooklistComponent } from './Bookstore/trending-booklist/trending-booklist.component';
import { LatestBooklistComponent } from './Bookstore/latest-booklist/latest-booklist.component';
import { BestsellerBooklistComponent } from './Bookstore/bestseller-booklist/bestseller-booklist.component';
import { BookCardComponent } from './Bookstore/book-card/book-card.component';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { BookDisplayService } from './Bookstore/services/book-display.service';
import { BookDetailsComponent } from './Bookstore/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './Account/login/login.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { CartComponent } from './Cart/cart/cart.component';
import { UploadBookComponent } from './NavBar/upload-book/upload-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCartService } from './Cart/services/user-cart.service';
import { AccountService } from './Account/services/account.service';
import { SearchResultsComponent } from './NavBar/search-results/search-results.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';






@NgModule({
  declarations: [
    AppComponent,
    BookCollectionComponent,
    TrendingBooklistComponent,
    LatestBooklistComponent,
    BestsellerBooklistComponent,
    BookCardComponent,
    NavBarComponent,
    BookDetailsComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    UploadBookComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  entryComponents:[
    BookDetailsComponent
  ], 
  providers: [
    BookDisplayService,
    UserCartService,
    AccountService,
    NavBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
