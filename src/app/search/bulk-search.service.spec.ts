import { TestBed } from '@angular/core/testing';

import { BulkSearchService } from './bulk-search.service';

describe('BulkSearchService', () => {
  let service: BulkSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
