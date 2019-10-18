import { TestBed } from '@angular/core/testing';

import { HeroTestingService } from './hero-testing.service';

describe('HeroTestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroTestingService = TestBed.get(HeroTestingService);
    expect(service).toBeTruthy();
  });
});
