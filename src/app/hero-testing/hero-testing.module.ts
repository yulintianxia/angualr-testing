import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroTestingComponent } from './hero-testing/hero-testing.component';
import { HeroTestingService } from '../shared/services/hero-testing.service';



@NgModule({
  declarations: [HeroTestingComponent],
  imports: [
    CommonModule
  ],
  providers: [HeroTestingService],
  exports: [HeroTestingComponent]
})
export class HeroTestingModule { }
