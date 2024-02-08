import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './models/loan.model'; // Import your book model

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiURL = './assets/loans.json'; // URL to web API
  
  constructor(private http:HttpClient) {
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiURL);
  }

  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan>(this.apiURL + '/' + id);
  }
}
