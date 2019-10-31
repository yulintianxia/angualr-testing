import { Component, OnInit, Input } from '@angular/core';
import { HerocacheService } from 'src/app/shared/services/herocache.service';

@Component({
  selector: 'app-hero-bis',
  templateUrl: './hero-bis.component.html',
  styleUrls: ['./hero-bis.component.scss'],
  providers: [HerocacheService]
})
export class HeroBisComponent implements OnInit {
  @Input() heroId: number;

  constructor(private heroCache: HerocacheService) { }

  ngOnInit() {
    this.heroCache.fetchCachedHero(this.heroId);
  }
  get hero() {
    return this.heroCache.hero;
  }

}
