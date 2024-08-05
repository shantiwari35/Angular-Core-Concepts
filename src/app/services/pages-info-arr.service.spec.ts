import { TestBed } from '@angular/core/testing';

import { PagesInfoArrService } from './pages-info-arr.service';

describe('PagesInfoArrService', () => {
  let service: PagesInfoArrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesInfoArrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
