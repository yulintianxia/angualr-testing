import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMessagesComponent } from './http-messages.component';

describe('HttpMessagesComponent', () => {
  let component: HttpMessagesComponent;
  let fixture: ComponentFixture<HttpMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
