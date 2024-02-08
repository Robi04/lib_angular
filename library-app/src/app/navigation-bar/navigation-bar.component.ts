import { Component } from '@angular/core';
import { BooksListComponent } from '../books-list/books-list.component';
import { MembersListComponent } from '../members-list/members-list.component';
import { LoansListComponent } from '../loans-list/loans-list.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [BooksListComponent,MembersListComponent,LoansListComponent,RouterLink,RouterLinkActive,RouterOutlet,CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
