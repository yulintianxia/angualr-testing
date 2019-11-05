import { TestBed } from '@angular/core/testing';

import { HttpmessageService } from './httpmessage.service';

describe('HttpmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpmessageService = TestBed.get(HttpmessageService);
    expect(service).toBeTruthy();
  });
});
