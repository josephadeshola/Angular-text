import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  // let routes=inject(Router);
  return true;
  // return localStorage["current_user"] ? true : routes.navigate(['/']);
};
