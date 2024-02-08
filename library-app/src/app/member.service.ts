import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiURL = './assets/members.json';

  constructor(private http:HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.apiURL);
  }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(this.apiURL + '/' + id);
  }
}
