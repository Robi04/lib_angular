import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberService } from '../member.service';
import { Member } from '../models/member.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,CommonModule
    // any other imports needed by this component
  ],
  providers: [MemberService] // Providing BookService if it's not already provided globally
})


export class MembersListComponent implements OnInit{
  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members)
  }

}
