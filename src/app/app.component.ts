import { Component, OnInit, forwardRef } from '@angular/core';
import { AdItem } from './adbanner/adconfig/ad-items';
import { AdService } from './shared/services/ad.service';

import { from, Observable } from 'rxjs';

import { TestingData } from './shared/interfaces/test.interface';
import { AdItems } from './adtesting/adItem';
import { AdtestingService } from './shared/services/adtesting.service';
import { QuestionService } from './shared/services/question.service';
import { LoggerService } from './shared/services/logger.service';
import { MessageParent } from './shared/interfaces/messageParent.class';
import { HeroTestingService } from './shared/services/hero-testing.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: MessageParent, useExisting: forwardRef(() => AppComponent) }
  ]
})
export class AppComponent implements OnInit {
  questions: any[] = [];
  birthday = new Date(1988, 3, 15); // April 15, 1988
  color: string = 'green';
  title = 'my-ng-app';
  fontSizePx = 30;
  // ads: AdItem[];
  condition = true;
  ads: AdItems[];
  toggle = true;
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  constructor(private loggerService: LoggerService, private adService: AdService, private adtestingService: AdtestingService, private questionService: QuestionService,
    private heroTestingService: HeroTestingService
  ) {
    this.questions = this.questionService.getQuestions();
  }
  ngOnInit() {
    // this.ads = this.adService.getAds();
    // this.testData();
    this.ads = this.adService.getAds();
    // console.log(this.ads);

  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  testData(): any {
    let apiData: TestingData[] = [{ name: '11', value: 11 }, { name: '222', value: 222 }];
    const data = from(apiData);
    data.subscribe({
      next(response) {
        console.log(response);
      }
    });
  }
  addLog() {
    this.loggerService.addLog('add log from appComponent successfully');
  }

  getStr(): string {
    return 'app component';
  }
  addLogTesting() {
    this.heroTestingService.addLog('app component');
  }

}
