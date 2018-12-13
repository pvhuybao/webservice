import { TestBed } from '@angular/core/testing';

import { ImportDetailService } from './import-detail.service';

describe('ImportDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportDetailService = TestBed.get(ImportDetailService);
    expect(service).toBeTruthy();
  });
});
