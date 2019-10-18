import { TestBed } from '@angular/core/testing';

import { ValidateHeroService } from './validate-hero.service';

describe('ValidateHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateHeroService = TestBed.get(ValidateHeroService);
    expect(service).toBeTruthy();
  });
});
