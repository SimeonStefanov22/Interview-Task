import { TestBed } from '@angular/core/testing';

import { SafeUsersService } from './safe-users.service';

describe('SafeUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafeUsersService = TestBed.get(SafeUsersService);
    expect(service).toBeTruthy();
  });
});
