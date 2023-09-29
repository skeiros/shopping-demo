import { AuthService } from 'src/app/login/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user=this.authService.getCurrentUser();
    if (user) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
