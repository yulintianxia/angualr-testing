import { TestBed } from '@angular/core/testing';

import { HeroDiService } from './hero-di.service';

describe('HeroDiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroDiService = TestBed.get(HeroDiService);
    expect(service).toBeTruthy();
  });
});
