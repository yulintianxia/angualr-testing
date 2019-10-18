import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDivComponent } from './drop-div.component';

describe('DropDivComponent', () => {
  let component: DropDivComponent;
  let fixture: ComponentFixture<DropDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
