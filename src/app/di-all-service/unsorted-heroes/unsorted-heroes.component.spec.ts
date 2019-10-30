import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsortedHeroesComponent } from './unsorted-heroes.component';

describe('UnsortedHeroesComponent', () => {
  let component: UnsortedHeroesComponent;
  let fixture: ComponentFixture<UnsortedHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsortedHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsortedHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
