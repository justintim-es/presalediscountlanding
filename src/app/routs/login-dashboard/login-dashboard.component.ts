import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscribable, SubscriptionLike } from 'rxjs';
import { enterFromBottom, enterFromLeft, enterFromRight } from 'src/app/animations';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IDispatch } from 'src/app/redux/interfaces';
import { ILoginDashboardFetch, RDX_LOGIN_DASHBOARD_FETCH } from 'src/app/redux/login-dashboard/actions';
import { getLoginDashboardFetchErrorMessage, getLoginDashboardIsFetch, getLoginDashboardIsFetchError, getLoginDashboardIsFetchSuccess, getLoginDashboardIsRouteThrough } from 'src/app/redux/login-dashboard/selectors';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css'],
  animations: [
    enterFromLeft,
    enterFromRight,
    enterFromBottom
  ]
})
export class LoginDashboardComponent implements OnDestroy {
  hideFirstPassword: boolean;
  hideSecondPassword: boolean;

  email: string;
  firstPassword: string;
  secondPassword: string;

  emailFormControl: FormControl;
  firstPasswordFormControl: FormControl;
  secondPasswordFormControl: FormControl;

  errorStateMatcher = new MyErrorStateMatcher();

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  isRouteThrough: SubscriptionLike;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.hideFirstPassword = true;
    this.hideSecondPassword = true;
    
    this.email = '';
    this.firstPassword = '';
    this.secondPassword = ''; 

    this.emailFormControl = new FormControl('', [
      Validators.required,
    ]);
    this.firstPasswordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.secondPasswordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.isFetch = this.store.select(getLoginDashboardIsFetch);
    this.isFetchSuccess = this.store.select(getLoginDashboardIsFetchSuccess)
    this.isRouteThrough = this.store.select(getLoginDashboardIsRouteThrough).subscribe(res => {
      if (res) {
        this.router.navigate(['/main']);
      }
    });
    this.isFetchError = this.store.select(getLoginDashboardIsFetchError).subscribe(res => {
      if (res) {
        this.secondPasswordFormControl.setErrors({ backend: true });
      }
    });
    this.fetchErrorMessage = this.store.select(getLoginDashboardFetchErrorMessage);
  }
  
  login() {
    this.store.dispatch<IDispatch<ILoginDashboardFetch>>({
      type: RDX_LOGIN_DASHBOARD_FETCH,
      payload: {
        e_mail: this.email,
        first_password: this.firstPassword,
        second_password: this.secondPassword,
      }
    })
  }
  ngOnDestroy(): void {
    this.isFetchError.unsubscribe();
  }
}
