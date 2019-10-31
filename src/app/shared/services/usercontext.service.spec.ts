import { TestBed } from '@angular/core/testing';

import { UsercontextService } from './usercontext.service';

describe('UsercontextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercontextService = TestBed.get(UsercontextService);
    expect(service).toBeTruthy();
  });
});
