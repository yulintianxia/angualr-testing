import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnHeroFormComponent } from './rn-hero-form.component';

describe('RnHeroFormComponent', () => {
  let component: RnHeroFormComponent;
  let fixture: ComponentFixture<RnHeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnHeroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
