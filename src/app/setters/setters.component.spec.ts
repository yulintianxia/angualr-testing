import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettersComponent } from './setters.component';

describe('SettersComponent', () => {
  let component: SettersComponent;
  let fixture: ComponentFixture<SettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
