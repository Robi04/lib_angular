import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    // any other imports needed by this component
  ],
})
export class ContactFormComponent {
  constructor() {}
}
