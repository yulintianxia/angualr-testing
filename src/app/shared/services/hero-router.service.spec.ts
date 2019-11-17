import { TestBed } from '@angular/core/testing';

import { HeroRouterService } from './hero-router.service';

describe('HeroRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroRouterService = TestBed.get(HeroRouterService);
    expect(service).toBeTruthy();
  });
});
