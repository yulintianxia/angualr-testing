import { TestBed } from '@angular/core/testing';

import { TrimNameInterceptorService } from './trim-name-interceptor.service';

describe('TrimNameInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrimNameInterceptorService = TestBed.get(TrimNameInterceptorService);
    expect(service).toBeTruthy();
  });
});
