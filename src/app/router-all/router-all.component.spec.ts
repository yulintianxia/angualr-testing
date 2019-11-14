import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAllComponent } from './router-all.component';

describe('RouterAllComponent', () => {
  let component: RouterAllComponent;
  let fixture: ComponentFixture<RouterAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
