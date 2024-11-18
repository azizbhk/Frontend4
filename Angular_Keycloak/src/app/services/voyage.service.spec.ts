import { TestBed } from '@angular/core/testing';

import { voyageService } from './voyage.service';

describe('voyageService', () => {
  let service: voyageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(voyageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
