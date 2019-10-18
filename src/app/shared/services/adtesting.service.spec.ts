import { TestBed } from '@angular/core/testing';

import { AdtestingService } from './adtesting.service';

describe('AdtestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdtestingService = TestBed.get(AdtestingService);
    expect(service).toBeTruthy();
  });
});
