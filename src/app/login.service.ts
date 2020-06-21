import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private AUTH_SERVER = "";

  constructor(private httpClient: HttpClient) { }

  // public signIn(user: User): Observable<User> {
  //   return this.httpClient.post<User>(`${this.AUTH_SERVER}/login`, user)
  //     .pipe(
  //       tap(_ => localStorage.setItem('ACCESS_TOKEN', "access_token")),
  //     );
  // }

  public signIn(user: User): void {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
