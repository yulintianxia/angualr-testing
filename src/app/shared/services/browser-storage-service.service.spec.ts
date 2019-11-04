import { TestBed } from '@angular/core/testing';

import { BrowserStorageServiceService } from './browser-storage-service.service';

describe('BrowserStorageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserStorageServiceService = TestBed.get(BrowserStorageServiceService);
    expect(service).toBeTruthy();
  });
});
