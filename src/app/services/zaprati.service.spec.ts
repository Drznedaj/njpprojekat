import { TestBed } from '@angular/core/testing';

import { ZapratiService } from './zaprati.service';

describe('ZapratiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZapratiService = TestBed.get(ZapratiService);
    expect(service).toBeTruthy();
  });
});
