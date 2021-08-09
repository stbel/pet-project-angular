import { TestBed } from '@angular/core/testing';

import { CollectiveService } from './collective.service';

describe('CollectiveService', () => {
  let service: CollectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
