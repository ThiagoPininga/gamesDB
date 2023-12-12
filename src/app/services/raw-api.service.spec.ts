import { TestBed } from '@angular/core/testing';

import { RawApiService } from './raw-api.service';

describe('RawApiService', () => {
  let service: RawApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
