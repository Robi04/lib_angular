import { Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';
import { MembersListComponent } from './members-list/members-list.component';
import { LoansListComponent } from './loans-list/loans-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: 'books-list-app', component: BooksListComponent },
  { path: 'members-list-app', component: MembersListComponent },
  { path: 'loans-list-app', component: LoansListComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'contact-form-app', component: ContactFormComponent },
];
