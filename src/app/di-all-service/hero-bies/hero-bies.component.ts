import { Component, OnInit } from '@angular/core';
import { HeroBisService } from 'src/app/shared/services/hero-bis.service';
import { LoggerdebugService } from 'src/app/shared/services/loggerdebug.service';

@Component({
  selector: 'app-hero-bies',
  template: `
  <app-hero-bis [heroId]="1"></app-hero-bis>
  <app-hero-bis [heroId]="2"></app-hero-bis>
  <app-hero-bis [heroId]="3"></app-hero-bis>`,
  styleUrls: ['./hero-bies.component.scss'],
  providers: [HeroBisService]
})
export class HeroBiesComponent implements OnInit {

  constructor(private logger: LoggerdebugService) {
    logger.logInfo('Creating HeroBiosComponent');
   }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-hero-bises-and-contacts',
  template: `
    <app-hero-bis [heroId]="1"> <app-hero-bis-and-concat></app-hero-bis-and-concat> </app-hero-bis>
    <app-hero-bis [heroId]="2"> <app-hero-bis-and-concat></app-hero-bis-and-concat> </app-hero-bis>
    <app-hero-bis [heroId]="3"> <app-hero-bis-and-concat></app-hero-bis-and-concat> </app-hero-bis>`,
    providers: [HeroBisService]
})
export class HeroBiosAndContactsComponent  implements OnInit  {
  ngOnInit() {
  }
  constructor(private logger: LoggerdebugService) {
    logger.logInfo('Creating HeroBiosAndContactsComponent');
   }
}
