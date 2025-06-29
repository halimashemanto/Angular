import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddBook } from './add-book/add-book';
import { ViewBook } from './view-book/view-book';
import { UpdateBook } from './update-book/update-book';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'addBook', component: AddBook },
  { path: 'viewBook', component: ViewBook },
  { path: '', component: UpdateBook },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
