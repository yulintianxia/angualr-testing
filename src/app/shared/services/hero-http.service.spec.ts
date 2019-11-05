import { TestBed } from '@angular/core/testing';

import { HeroHttpService } from './hero-http.service';

describe('HeroHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroHttpService = TestBed.get(HeroHttpService);
    expect(service).toBeTruthy();
  });
});
