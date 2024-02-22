import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, of, tap } from 'rxjs';
import { inject } from '@angular/core';

export const publicActiveGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
  return checkAuthStatusAuth();
};

export const publicMatchGuard: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
  ) => {
  return checkAuthStatusAuth();
};

const checkAuthStatusAuth = (): boolean | Observable<boolean> => {
  //se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap(( isAuthenticated ) => {
      if ( isAuthenticated ) {
        router.navigate(['./']);
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  );
};
