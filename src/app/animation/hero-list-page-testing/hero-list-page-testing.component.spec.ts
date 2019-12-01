import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListGroupsComponent } from './hero-list-page-testing.component';

describe('HeroListPageTestingComponent', () => {
  let component: HeroListGroupsComponent;
  let fixture: ComponentFixture<HeroListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListPageTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
