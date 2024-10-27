import { TestBed } from '@angular/core/testing';

import { LibTwoService } from './lib-two.service';

describe('LibTwoService', () => {
  let service: LibTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
