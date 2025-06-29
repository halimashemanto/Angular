import { TestBed } from '@angular/core/testing';

import { Doctorname } from './doctorname';

describe('Doctorname', () => {
  let service: Doctorname;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doctorname);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
