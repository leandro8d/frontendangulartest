import { TestBed } from '@angular/core/testing';

import { CRUDEService } from './crude.service';

describe('CRUDEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CRUDEService = TestBed.get(CRUDEService);
    expect(service).toBeTruthy();
  });
});
