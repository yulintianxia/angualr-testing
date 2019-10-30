import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiAllServiceComponent } from './di-all-service.component';

describe('DiAllServiceComponent', () => {
  let component: DiAllServiceComponent;
  let fixture: ComponentFixture<DiAllServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiAllServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiAllServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
