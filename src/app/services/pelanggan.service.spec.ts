import { TestBed } from '@angular/core/testing';

import { PelangganService } from './pelanggan.service';

describe('PelangganService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelangganService = TestBed.get(PelangganService);
    expect(service).toBeTruthy();
  });
});
