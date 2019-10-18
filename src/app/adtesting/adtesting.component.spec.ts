import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtestingComponent } from './adtesting.component';

describe('AdtestingComponent', () => {
  let component: AdtestingComponent;
  let fixture: ComponentFixture<AdtestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdtestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
