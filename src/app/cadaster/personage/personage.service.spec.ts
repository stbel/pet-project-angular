import { TestBed } from '@angular/core/testing';

import { PersonageService } from './personage.service';

describe('PersonageService', () => {
  let service: PersonageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
