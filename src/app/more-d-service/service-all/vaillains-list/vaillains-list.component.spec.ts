import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaillainsListComponent } from './vaillains-list.component';

describe('VaillainsListComponent', () => {
  let component: VaillainsListComponent;
  let fixture: ComponentFixture<VaillainsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaillainsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaillainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
