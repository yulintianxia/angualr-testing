import { Injectable } from '@angular/core';
import { AdItems } from '../../adtesting/adItem';
import { Adtest1Component } from '../../adtesting/adtest1/adtest1.component';
import { Adtest2Component } from '../../adtesting/adtest2/adtest2.component';

@Injectable({
  providedIn: 'root'
})
export class AdtestingService {
  constructor() {
  }
  getAds() {
    return [
      new AdItems(Adtest1Component, { name: 'Bombasto', bio: 'Brave as they come' }),
      new AdItems(Adtest1Component, { name: 'Dr IQ', bio: 'Smart as they come' }),
      new AdItems(Adtest2Component, { headline: 'Hiring for several positions', body: 'Submit your resume today!' }),
      new AdItems(Adtest2Component, { headline: 'Openings in all departments', body: 'Apply today'}),
    ];
  }
}
