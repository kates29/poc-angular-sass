import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Q_CLAVES } from '../mocks/clave_questions';
import { CATEGORY } from '../mocks/category';
import { Router } from '@angular/router';

@Injectable()
export class QuestionsService {

  constructor(private router: Router) { }

  getQuestions(): Observable<any[]>{
    return Observable.of(Q_CLAVES).delay(100);
  }

  getCategories(): Observable<any[]>{
    return Observable.of(CATEGORY).delay(100);
  }

  go_to(url): void {
    this.router.navigateByUrl(url);
  }

}
