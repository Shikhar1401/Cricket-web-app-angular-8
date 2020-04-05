import { TestBed } from '@angular/core/testing';

import { PointserviceService } from './pointservice.service';

describe('PointserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointserviceService = TestBed.get(PointserviceService);
    expect(service).toBeTruthy();
  });
});
