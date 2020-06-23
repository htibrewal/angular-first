import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from './user';
import { Response } from './response';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private AUTH_SERVER = "http://localhost:8000";

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  public signIn(user: User): Observable<Response> {
    return this.httpClient.post<Response>(`${this.AUTH_SERVER}/login`, user)
      .pipe(
        tap((res: Response) => {
          const {status, message} = res;
          this.log(message);

          if(status) {
            localStorage.setItem('ACCESS_TOKEN', "access_token")
          }
        }),
      );
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.log('Logout Successful');
  }

  log(message: string): void {
    this.messageService.add(`Login Service: ${message}`);
  }
}
