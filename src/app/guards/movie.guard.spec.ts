import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { movieGuard } from './movie.guard';

describe('movieGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => movieGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
