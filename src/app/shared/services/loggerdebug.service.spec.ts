import { TestBed } from '@angular/core/testing';

import { LoggerdebugService } from './loggerdebug.service';

describe('LoggerdebugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerdebugService = TestBed.get(LoggerdebugService);
    expect(service).toBeTruthy();
  });
});
