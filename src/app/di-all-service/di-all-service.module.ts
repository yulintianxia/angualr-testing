import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiAllServiceComponent } from './di-all-service.component';
import { HeroBisComponent } from './hero-bis/hero-bis.component';
import { HeroBisAndConcatComponent } from './hero-bis-and-concat/hero-bis-and-concat.component';
import { HeroOfTheMonthComponent } from './hero-of-the-month/hero-of-the-month.component';
import { UnsortedHeroesComponent } from './unsorted-heroes/unsorted-heroes.component';
import { SortedHeroesComponent } from './sorted-heroes/sorted-heroes.component';
import { ParentFinderComponent } from './parent-finder/parent-finder.component';
import { StorageTestComponent } from './storage-test/storage-test.component';
import { FormsModule } from '@angular/forms';
import { HeroBiesComponent, HeroBiosAndContactsComponent } from './hero-bies/hero-bies.component';

@NgModule({
  declarations: [
    DiAllServiceComponent,
    HeroBisComponent,
    HeroBisAndConcatComponent,
    HeroOfTheMonthComponent,
    UnsortedHeroesComponent,
    SortedHeroesComponent,
    ParentFinderComponent,
    StorageTestComponent,
    HeroBiesComponent,
    HeroBiosAndContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DiAllServiceComponent,
    HeroBisComponent,
    HeroBisAndConcatComponent,
    HeroOfTheMonthComponent,
    UnsortedHeroesComponent,
    SortedHeroesComponent,
    ParentFinderComponent,
    StorageTestComponent,
    HeroBiesComponent,
    HeroBiosAndContactsComponent
  ]
})
export class DiAllServiceModule { }
