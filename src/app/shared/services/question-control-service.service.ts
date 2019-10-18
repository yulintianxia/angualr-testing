import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionBase } from '../interfaces/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlServiceService {

  constructor() { }
  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
