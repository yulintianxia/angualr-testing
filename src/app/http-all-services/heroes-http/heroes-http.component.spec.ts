import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHttpComponent } from './heroes-http.component';

describe('HeroesHttpComponent', () => {
  let component: HeroesHttpComponent;
  let fixture: ComponentFixture<HeroesHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
