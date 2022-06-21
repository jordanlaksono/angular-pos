import { TestBed } from '@angular/core/testing';

import { BarangService } from './barang.service';

describe('BarangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarangService = TestBed.get(BarangService);
    expect(service).toBeTruthy();
  });
});
