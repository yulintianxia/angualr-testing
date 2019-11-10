import { TestBed } from '@angular/core/testing';

import { HttpInterceptorProvidersService } from './http-interceptor-providers.service';

describe('HttpInterceptorProvidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorProvidersService = TestBed.get(HttpInterceptorProvidersService);
    expect(service).toBeTruthy();
  });
});
