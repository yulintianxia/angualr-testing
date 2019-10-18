import { Component, OnInit, Inject, Input } from '@angular/core';
import { QuestionBase } from 'src/app/shared/interfaces/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
}
