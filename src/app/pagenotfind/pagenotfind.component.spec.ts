import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfindComponent } from './pagenotfind.component';

describe('PagenotfindComponent', () => {
  let component: PagenotfindComponent;
  let fixture: ComponentFixture<PagenotfindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
