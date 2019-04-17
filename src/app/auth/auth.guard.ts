import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const authenticated = this.authService.isAuthenticated();
    if (authenticated) {
      return true;
    }

    this.router.navigate(['/auth/signin']);
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    const authenticated = this.authService.isAuthenticated();
    if (authenticated) {
      return true;
    }

    this.router.navigate(['/auth/signin']);
    return false;
  }
}
