import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBisAndConcatComponent } from './hero-bis-and-concat.component';

describe('HeroBisAndConcatComponent', () => {
  let component: HeroBisAndConcatComponent;
  let fixture: ComponentFixture<HeroBisAndConcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBisAndConcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBisAndConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
