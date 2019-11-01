import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { HerocacheService } from 'src/app/shared/services/herocache.service';
import { DateLoggerService } from 'src/app/shared/services/date-logger.service';
import { LoggerdebugService } from 'src/app/shared/services/loggerdebug.service';
import { Herobis } from 'src/app/shared/interfaces/hero-bis';
import { MinLoggerDebug } from 'src/app/shared/interfaces/minLoggerDebug';

const someHero = new Herobis(42, 'Magma', 'Had a great month!', '555-555-5555');

export const Title = new InjectionToken<string>('title');
@Component({
  selector: 'app-hero-of-the-month',
  templateUrl: './hero-of-the-month.component.html',
  styleUrls: ['./hero-of-the-month.component.scss'],
  providers: [
    { provide: Herobis, useValue: someHero },
    { provide: Title, useValue: '这是一个title' },
    { provide: HerocacheService, useClass: HerocacheService },
    // { provide: LoggerdebugService, useClass: DateLoggerService },
    { provide: MinLoggerDebug, useExisting: LoggerdebugService },
  ]
})
export class HeroOfTheMonthComponent implements OnInit {

  constructor(
    public hero: Herobis,
    @Inject(Title) public title: string,
    // private loggerDebug: LoggerdebugService,
    private logg: MinLoggerDebug
  ) { }

  ngOnInit() {
    // console.log(this.hero);
    this.getData();
  }
  getData() {
    // this.loggerDebug.logInfo('这是一个数据');
    this.logg.logInfo('我去,这是啥子问题');
  }

}
