import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingRxComponent } from './testing-rx.component';

describe('TestingRxComponent', () => {
  let component: TestingRxComponent;
  let fixture: ComponentFixture<TestingRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
