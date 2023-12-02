import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppService } from '../shared/service/app.service';

export const movieGuard: CanActivateFn = (_route, _state) => {
  if (inject(AppService).getMovie()) {
    return true;
  } else {
    inject(Router).navigate(['/movies']);
    return false;
  }
};
