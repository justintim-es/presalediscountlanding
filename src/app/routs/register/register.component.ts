import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterFromBottom, enterFromLeft, enterFromRight, enterFromTopText } from 'src/app/animations';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IDispatch } from 'src/app/redux/interfaces';
import { IRegisterFetch, RDX_REGISTER_FETCH } from 'src/app/redux/register/actions';
import { getRegisterFetchErrorMessage, getRegisterIsEmailFetchError, getRegisterIsFetch, getRegisterIsFetchSuccess, getRegisterIsFirstPasswordFetchError, getRegisterIsRoutePlease, getRegisterIsSecondPasswordFetchError } from 'src/app/redux/register/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    enterFromTopText,
    enterFromLeft,
    enterFromRight,
    enterFromBottom
  ]
})
export class RegisterComponent implements OnDestroy {
  companyName: string;
  companyNameFormControl: FormControl;
  email: string;
  emailFormControl: FormControl;
  firstPassword: string;
  firstPasswordFormControl: FormControl;
  secondPassword: string;
  secondPasswordFormControl: FormControl;
  errorStateMatcher: ErrorStateMatcher;

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isRoutePleaseSubscription: SubscriptionLike;
  isEmailFetchError: SubscriptionLike;
  isFirstPasswordFetchError: SubscriptionLike;
  isSecondPasswordFetchError: SubscriptionLike;
  fetchErrorMessage: Observable<string>;
  // isFetchError: Observable<boolean>;

  firstHide: boolean;
  secondHide: boolean;
  constructor(
    private store: Store,
    private router: Router
  ) {
    this.companyName = '';
    this.companyNameFormControl = new FormControl('', [
      Validators.required
    ]);
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.firstPassword = '';
    this.firstPasswordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.secondPassword = '';
    this.secondPasswordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();

    this.isFetch = this.store.select(getRegisterIsFetch);
    this.isFetchSuccess = this.store.select(getRegisterIsFetchSuccess);
    this.isRoutePleaseSubscription = this.store.select(getRegisterIsRoutePlease).subscribe(res => {
      if (res) {
        this.router.navigate(['/please']);
      }
    });
    this.isEmailFetchError = this.store.select(getRegisterIsEmailFetchError).subscribe(res => {
      if (res) {
        this.emailFormControl.setErrors({ backend: true })
      }
    });
    this.isFirstPasswordFetchError = this.store.select(getRegisterIsFirstPasswordFetchError).subscribe(res => {
      if (res) {
        this.firstPasswordFormControl.setErrors({ backend: true })
      }
    })
    this.isSecondPasswordFetchError = this.store.select(getRegisterIsSecondPasswordFetchError).subscribe(res => {
      if (res) {
        this.secondPasswordFormControl.setErrors({ backend: true });
      }
    });
    this.fetchErrorMessage = this.store.select(getRegisterFetchErrorMessage);

    this.firstHide = true;
    this.secondHide = true;
  }

  register() {
    this.emailFormControl.setErrors({ backend: false });
    this.firstPasswordFormControl.setErrors({ backend: false });
    this.secondPasswordFormControl.setErrors({ backend: false })
    this.store.dispatch<IDispatch<IRegisterFetch>>({
      type: RDX_REGISTER_FETCH,
      payload: {
        company_name: this.companyName,
        e_mail: this.email,
        first_password: this.firstPassword,
        second_password: this.secondPassword
      }
    })
  }
  ngOnDestroy(): void {
    this.isRoutePleaseSubscription.unsubscribe();
    this.isEmailFetchError.unsubscribe();
    this.isFirstPasswordFetchError.unsubscribe();
    this.isSecondPasswordFetchError.unsubscribe();
  }

}
