import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTestComponent } from './storage-test.component';

describe('StorageTestComponent', () => {
  let component: StorageTestComponent;
  let fixture: ComponentFixture<StorageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
