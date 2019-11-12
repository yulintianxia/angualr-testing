import { TestBed } from '@angular/core/testing';

import { EnsureHttpsInterceptorService } from './ensure-https-interceptor.service';

describe('EnsureHttpsInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnsureHttpsInterceptorService = TestBed.get(EnsureHttpsInterceptorService);
    expect(service).toBeTruthy();
  });
});
