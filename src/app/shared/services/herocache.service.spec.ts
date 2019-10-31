import { TestBed } from '@angular/core/testing';

import { HerocacheService } from './herocache.service';

describe('HerocacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerocacheService = TestBed.get(HerocacheService);
    expect(service).toBeTruthy();
  });
});
