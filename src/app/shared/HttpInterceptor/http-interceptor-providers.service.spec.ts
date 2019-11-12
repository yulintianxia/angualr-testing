import { TestBed } from '@angular/core/testing';
import { UploadInterceptor } from './http-interceptor-providers.service';

describe('UploadInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadInterceptor = TestBed.get(UploadInterceptor);
    expect(service).toBeTruthy();
  });
});
