import { TestBed } from '@angular/core/testing';

import { PackageSerachService } from './package-serach.service';

describe('PackageSerachService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageSerachService = TestBed.get(PackageSerachService);
    expect(service).toBeTruthy();
  });
});
