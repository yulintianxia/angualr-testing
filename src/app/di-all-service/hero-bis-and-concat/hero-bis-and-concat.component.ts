import { Component, OnInit, Host, Optional } from '@angular/core';
import { HerocacheService } from 'src/app/shared/services/herocache.service';
import { LoggerdebugService } from 'src/app/shared/services/loggerdebug.service';

@Component({
  selector: 'app-hero-bis-and-concat',
  templateUrl: './hero-bis-and-concat.component.html',
  styleUrls: ['./hero-bis-and-concat.component.scss']
})
export class HeroBisAndConcatComponent implements OnInit {
  hasLogger = false;
  constructor(
    @Host()
    private heroCache: HerocacheService,
    @Host()
    @Optional()
    private logger: LoggerdebugService
  ) {
    if (logger) {
      this.hasLogger = true;
      logger.logInfo('HeroContactComponent can log!');
    }
  }

  ngOnInit() {
  }

  get phoneNumber() {
    return this.heroCache.hero.phone;
  }

}
