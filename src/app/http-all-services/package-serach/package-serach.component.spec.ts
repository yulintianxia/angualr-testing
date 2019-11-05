import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSerachComponent } from './package-serach.component';

describe('PackageSerachComponent', () => {
  let component: PackageSerachComponent;
  let fixture: ComponentFixture<PackageSerachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageSerachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
