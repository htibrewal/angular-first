import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];

  constructor(private router: Router, private questionService: QuestionService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .subscribe(qs => this.questions = qs);
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
