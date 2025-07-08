import { TestBed } from '@angular/core/testing';

import { DrpartmentService } from './drpartment-service';

describe('DrpartmentService', () => {
  let service: DrpartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrpartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
