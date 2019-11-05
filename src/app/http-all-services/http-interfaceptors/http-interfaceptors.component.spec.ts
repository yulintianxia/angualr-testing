import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterfaceptorsComponent } from './http-interfaceptors.component';

describe('HttpInterfaceptorsComponent', () => {
  let component: HttpInterfaceptorsComponent;
  let fixture: ComponentFixture<HttpInterfaceptorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpInterfaceptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpInterfaceptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
