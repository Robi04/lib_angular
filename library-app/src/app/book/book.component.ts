import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../book.service';
import { Book } from './../models/book.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  standalone: true,
})
export class BookComponent {
  id: number;
  title: string;
  author: string;
  isbn: string;
  description: string;
  rating: number;
  price: number;
  creationDate: string;
  cover: string;
  @Input() book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    if (!this.book) {
      // Si le livre n'est pas passé en input, cherchez-le via l'ID de l'URL
      this.route.params.subscribe((params) => {
        const id = params['id'];
        this.bookService.getBookById(id).subscribe((bookData) => {
          this.book = bookData;
        });
      });
    }
  }
}

// ...autres imports
// import { BookService } from './book.service';
// import { Book } from './book.model';

// @Component({
//   // ...décorateur @Component
// })
// export class BookComponent implements OnInit {
//   @Input() book?: Book;

//   constructor(
//     private route: ActivatedRoute,
//     private bookService: BookService
//   ) {}

//   ngOnInit(): void {
//     if (!this.book) { // Si le livre n'est pas passé en input, cherchez-le via l'ID de l'URL
//       this.route.params.subscribe(params => {
//         const id = params['id'];
//         this.bookService.getBookById(id).subscribe(bookData => {
//           this.book = bookData;
//         });
//       });
//     }
//   }
// }
