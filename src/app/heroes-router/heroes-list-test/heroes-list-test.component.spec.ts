import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListTestComponent } from './heroes-list-test.component';

describe('HeroesListTestComponent', () => {
  let component: HeroesListTestComponent;
  let fixture: ComponentFixture<HeroesListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesListTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
