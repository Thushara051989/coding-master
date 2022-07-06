import { TestBed } from '@angular/core/testing';

import { RsjxintervalService } from './rsjxinterval.service';

describe('RsjxintervalService', () => {
  let service: RsjxintervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsjxintervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
