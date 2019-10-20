import { TestBed } from '@angular/core/testing';

import { VaillainsService } from './vaillains.service';

describe('VaillainsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaillainsService = TestBed.get(VaillainsService);
    expect(service).toBeTruthy();
  });
});
