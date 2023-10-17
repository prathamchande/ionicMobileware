import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isAuthenticatedUser()) {
        return true;
      } else {
        // Redirect to the login page if not authenticated
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
