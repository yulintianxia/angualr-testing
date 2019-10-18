import { TestBed } from '@angular/core/testing';

import { QuestionControlServiceService } from './question-control-service.service';

describe('QuestionControlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionControlServiceService = TestBed.get(QuestionControlServiceService);
    expect(service).toBeTruthy();
  });
});
