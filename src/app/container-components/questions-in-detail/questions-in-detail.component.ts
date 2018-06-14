import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { QuestionsService } from '../../shared/services/questions.service';

@Component({
  selector: 'app-questions-in-detail',
  templateUrl: './questions-in-detail.component.html',
  styleUrls: ['./questions-in-detail.component.scss']
})
export class QuestionsInDetailComponent implements OnInit {
  questions: any[];
  back_url = "/dashboard";

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      
      (questions) => 
        {
          this.questions = questions
          this.questions.forEach(question => {
            this[question["collapse"]] = false;
          });
        }
      );
    console.log(this.questions);
  }
}
