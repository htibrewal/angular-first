import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[];

  constructor() { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    
  }
}
