import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Question } from './question';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private AUTH_SERVER = "http://localhost:8000";

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.AUTH_SERVER}/questions`)
      .pipe(
        tap(_ => this.log('Fetched Questions'))
      );
  }

  log(message: string): void {
    this.messageService.add(`Question Service: ${message}`);
  }
}
