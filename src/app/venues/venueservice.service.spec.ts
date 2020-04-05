import { TestBed } from '@angular/core/testing';

import { VenueserviceService } from './venueservice.service';

describe('VenueserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenueserviceService = TestBed.get(VenueserviceService);
    expect(service).toBeTruthy();
  });
});
