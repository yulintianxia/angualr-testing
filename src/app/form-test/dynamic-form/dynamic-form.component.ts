import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/shared/interfaces/question-base';
import { QuestionControlServiceService } from 'src/app/shared/services/question-control-service.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlServiceService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.form);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
