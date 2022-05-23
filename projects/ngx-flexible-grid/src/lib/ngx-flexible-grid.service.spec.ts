import { TestBed } from '@angular/core/testing';

import { NgxFlexibleGridService } from './ngx-flexible-grid.service';

describe('NgxFlexibleGridService', () => {
  let service: NgxFlexibleGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFlexibleGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
