import { Component, OnInit } from '@angular/core';
import { HeroTestingService } from 'src/app/shared/services/hero-testing.service';

@Component({
  selector: 'app-hero-testing',
  templateUrl: './hero-testing.component.html',
  styleUrls: ['./hero-testing.component.scss']
})
export class HeroTestingComponent implements OnInit {

  constructor(private heroTestingService: HeroTestingService) {}

  addLog() {
    this.heroTestingService.addLog('hero component');
  }
  ngOnInit() {
  }

}
