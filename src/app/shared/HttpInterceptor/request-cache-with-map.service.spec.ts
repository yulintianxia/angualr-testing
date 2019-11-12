import { TestBed } from '@angular/core/testing';

import { RequestCacheWithMapService } from './request-cache-with-map.service';

describe('RequestCacheWithMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestCacheWithMapService = TestBed.get(RequestCacheWithMapService);
    expect(service).toBeTruthy();
  });
});
