import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';

describe('ApodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApodService = TestBed.get(ApodService);
    expect(service).toBeTruthy();
  });
});
