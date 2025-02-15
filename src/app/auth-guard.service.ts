import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { getTokenHas } from './redux/token/selectors'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  logouts: boolean;
    constructor(
      private store: Store,
      private notrouters: Router
    ) {
      this.logouts = true;
      this.store.select(getTokenHas).subscribe(req => this.logouts = req);
  
     }
     canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.logouts) this.notrouters.navigate(['/login-dashboard'])
        return this.logouts;
        // return true;
     
}
}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
}
