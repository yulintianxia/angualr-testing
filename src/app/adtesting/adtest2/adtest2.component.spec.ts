import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adtest2Component } from './adtest2.component';

describe('Adtest2Component', () => {
  let component: Adtest2Component;
  let fixture: ComponentFixture<Adtest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adtest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adtest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
