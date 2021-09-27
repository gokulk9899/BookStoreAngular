import { TestBed } from '@angular/core/testing';

import { BookDisplayService } from './book-display.service';

describe('BookDisplayService', () => {
  let service: BookDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
