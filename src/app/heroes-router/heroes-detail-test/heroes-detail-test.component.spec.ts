import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailTestComponent } from './heroes-detail-test.component';

describe('HeroesDetailTestComponent', () => {
  let component: HeroesDetailTestComponent;
  let fixture: ComponentFixture<HeroesDetailTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDetailTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetailTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
