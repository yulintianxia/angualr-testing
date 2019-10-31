import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBiesComponent } from './hero-bies.component';

describe('HeroBiesComponent', () => {
  let component: HeroBiesComponent;
  let fixture: ComponentFixture<HeroBiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
