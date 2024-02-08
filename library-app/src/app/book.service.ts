import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/book.model'; // Import your book model

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = './assets/books.json'; // URL to web API

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/' + id);
  }
}
