import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './Bookstore/book-collection/book-collection.component';
import { BookDetailsComponent } from './Bookstore/book-details/book-details.component';

const routes: Routes = [
   {path:'bookStore',component:BookCollectionComponent}
  // {path:'**',component:BookCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
