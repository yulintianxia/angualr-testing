import { TestBed } from '@angular/core/testing';

import { HeroBisService } from './hero-bis.service';

describe('HeroBisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroBisService = TestBed.get(HeroBisService);
    expect(service).toBeTruthy();
  });
});
