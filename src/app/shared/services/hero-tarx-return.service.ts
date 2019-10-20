import { Injectable } from '@angular/core';
import { HeroReturn } from '../interfaces/hero-di';
import { HeroDiService } from './hero-di.service';

@Injectable()
export class HeroTarxReturnService {
  private currenTaxReturn: HeroReturn;
  private originTaxReturn: HeroReturn;
  constructor(private heroService: HeroDiService) { }
  set taxReturn(htr: HeroReturn) {
    this.originTaxReturn = htr;
    this.currenTaxReturn = htr.clone();
  }
  get HeroReturn(): HeroReturn {
    return this.currenTaxReturn;
  }

  restoreTaxReturn() {
    this.taxReturn = this.originTaxReturn;
  }

  saveTaxReturn() {
    this.taxReturn = this.currenTaxReturn;
    this.heroService.saveHeroReturn(this.currenTaxReturn).subscribe(); 
  }

}
