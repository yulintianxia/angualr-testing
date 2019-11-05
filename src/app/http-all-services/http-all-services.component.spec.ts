import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAllServicesComponent } from './http-all-services.component';

describe('HttpAllServicesComponent', () => {
  let component: HttpAllServicesComponent;
  let fixture: ComponentFixture<HttpAllServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpAllServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
