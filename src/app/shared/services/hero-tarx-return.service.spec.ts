import { TestBed } from '@angular/core/testing';

import { HeroTarxReturnService } from './hero-tarx-return.service';

describe('HeroTarxReturnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroTarxReturnService = TestBed.get(HeroTarxReturnService);
    expect(service).toBeTruthy();
  });
});
