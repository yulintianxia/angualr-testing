import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSliderComponentComponent } from './status-slider-component.component';

describe('StatusSliderComponentComponent', () => {
  let component: StatusSliderComponentComponent;
  let fixture: ComponentFixture<StatusSliderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusSliderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
