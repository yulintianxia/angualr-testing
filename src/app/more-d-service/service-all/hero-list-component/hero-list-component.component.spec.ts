import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponentComponent } from './hero-list-component.component';

describe('HeroListComponentComponent', () => {
  let component: HeroListComponentComponent;
  let fixture: ComponentFixture<HeroListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
