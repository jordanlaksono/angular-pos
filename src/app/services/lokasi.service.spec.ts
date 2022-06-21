import { TestBed } from '@angular/core/testing';

import { LokasiService } from './lokasi.service';

describe('LokasiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LokasiService = TestBed.get(LokasiService);
    expect(service).toBeTruthy();
  });
});
