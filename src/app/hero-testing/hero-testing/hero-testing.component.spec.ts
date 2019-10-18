import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTestingComponent } from './hero-testing.component';

describe('HeroTestingComponent', () => {
  let component: HeroTestingComponent;
  let fixture: ComponentFixture<HeroTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
