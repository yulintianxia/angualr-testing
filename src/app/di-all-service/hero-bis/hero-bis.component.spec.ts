import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBisComponent } from './hero-bis.component';

describe('HeroBisComponent', () => {
  let component: HeroBisComponent;
  let fixture: ComponentFixture<HeroBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
