import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettersParentComponent } from './setters-parent.component';

describe('SettersParentComponent', () => {
  let component: SettersParentComponent;
  let fixture: ComponentFixture<SettersParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettersParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettersParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
