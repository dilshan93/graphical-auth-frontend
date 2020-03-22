import { TestBed } from '@angular/core/testing';

import { StorTokenService } from './stor-token.service';

describe('StorTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorTokenService = TestBed.get(StorTokenService);
    expect(service).toBeTruthy();
  });
});
