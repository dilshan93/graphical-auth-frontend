import { TestBed } from '@angular/core/testing';

import { UserRegisterDataService } from './user-register-data.service';

describe('UserRegisterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegisterDataService = TestBed.get(UserRegisterDataService);
    expect(service).toBeTruthy();
  });
});
