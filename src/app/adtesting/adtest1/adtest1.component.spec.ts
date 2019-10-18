import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adtest1Component } from './adtest1.component';

describe('Adtest1Component', () => {
  let component: Adtest1Component;
  let fixture: ComponentFixture<Adtest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adtest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adtest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
