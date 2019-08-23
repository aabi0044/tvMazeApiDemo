import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route:ActivatedRouteSnapshot): boolean {
    if (!this.auth.isLogedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
