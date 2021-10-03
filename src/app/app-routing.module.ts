import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { BookCollectionComponent } from './Bookstore/book-collection/book-collection.component';
import { BookDetailsComponent } from './Bookstore/book-details/book-details.component';
import { CartComponent } from './Cart/cart/cart.component';
import { HomeComponent } from './Home/home/home.component';
import { CategoryBookComponent } from './NavBar/category-book/category-book.component';
import { SearchResultsComponent } from './NavBar/search-results/search-results.component';

const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'bookStore',component:BookCollectionComponent},
   {path:'addCart',component:CartComponent},
   {path:'searchResults',component:SearchResultsComponent},
   {path:'categoryResults',component:CategoryBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
