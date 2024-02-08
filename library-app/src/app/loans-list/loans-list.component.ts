import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanService } from '../loan.service';
import { Loan } from '../models/loan.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,CommonModule
    // any other imports needed by this component
  ],
  providers: [LoanService] // Providing BookService if it's not already provided globally
})


export class LoansListComponent implements OnInit{
  loans: Loan[];

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.loanService.getLoans()
      .subscribe(loans => this.loans = loans)
  }

}
