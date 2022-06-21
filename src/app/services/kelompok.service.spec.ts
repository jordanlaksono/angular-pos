import { TestBed } from '@angular/core/testing';

import { KelompokService } from './kelompok.service';

describe('KelompokService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KelompokService = TestBed.get(KelompokService);
    expect(service).toBeTruthy();
  });
});
