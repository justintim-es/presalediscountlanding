import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { getBalanceBalance, getBalanceIsFetch, getBalanceIsFetchSuccess, RDX_BALANCE_FETCH } from 'src/app/redux/balance/reducer';
import { getDeductFetchErrorMessage, getDeductIsFetch, getDeductIsFetchSuccess,IDeduct, IFetchErrorMessage, RDX_DEDUCT_FETCH, RDX_DEDUCT_RESEND } from 'src/app/redux/deduct/reducer';
import { IDispatch } from 'src/app/redux/interfaces';
import { getIsLatestIsFetch, getIsLatestIsFetchError, getIsLatestIsFetchSuccess, RDX_IS_LATEST_FETCH } from 'src/app/redux/is-latest/reducer';

@Component({
  selector: 'app-deduct',
  templateUrl: './deduct.component.html',
  styleUrls: ['./deduct.component.css']
})
export class DeductComponent implements OnDestroy {
  recognition: string;
  sub: SubscriptionLike
  isBalanceFetch: Observable<boolean>;
  isBalanceFetchSuccess: Observable<boolean>;
  balance: Observable<number>;
  isLatestFetch: Observable<boolean>;
  isLatestFetchSuccess: Observable<boolean>;
  isLatestFetchError: Observable<boolean>;
  isDeductFetch: Observable<boolean>;
  isDeductFetchSuccess: Observable<boolean>;
  // isDeductFetchError: Observable<boolean>;
  deductFetchErrorMessage: Observable<IFetchErrorMessage>;
  deductFetchErrorMessageSub: SubscriptionLike;
  cents: number;
  // centsFormControl: FormControl;
  shopcode!: number;
  formgroup: FormGroup
  // shopcodeformcontrol: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // this.shopcode = 0;
    this.recognition = '';
    this.cents = 0;
    this.formgroup = this.fb.group({
      cents: ['', Validators.required],
      shopcode: ['', Validators.required],
    })
    // this.centsFormControl = new FormControl('', [
    //   Validators.required
    // ]);
    // this.shopcodeformcontrol = new FormControl('', [
    //   Validators.required
    // ])
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.sub = this.route.paramMap.subscribe(res => {
      this.recognition = res.get('recognition')!;
      this.store.dispatch<IDispatch<string>>({
        type: RDX_BALANCE_FETCH,
        payload: this.recognition
      });
      this.store.dispatch<IDispatch<string>>({
        type: RDX_IS_LATEST_FETCH,
        payload: this.recognition
      })
    });
    this.isBalanceFetch = this.store.select(getBalanceIsFetch);
    this.isBalanceFetchSuccess = this.store.select(getBalanceIsFetchSuccess);
    this.balance = this.store.select(getBalanceBalance);
    this.isLatestFetch = this.store.select(getIsLatestIsFetch);
    this.isLatestFetchSuccess = this.store.select(getIsLatestIsFetchSuccess);
    this.isLatestFetchError = this.store.select(getIsLatestIsFetchError);
    this.isDeductFetch = this.store.select(getDeductIsFetch);
    this.isDeductFetchSuccess = this.store.select(getDeductIsFetchSuccess);
    // this.isDeductFetchError = this.store.select(getDeductIsFetchError);
    this.deductFetchErrorMessage = this.store.select(getDeductFetchErrorMessage);
    this.deductFetchErrorMessageSub = this.store.select(getDeductFetchErrorMessage).subscribe(res => {
      if (res.is) this.formgroup.controls[res.formcontrol].setErrors({ backend: true })
    })
  }
  deduct() {
    this.store.dispatch<IDispatch<IDeduct>>({
      type: RDX_DEDUCT_FETCH,
      payload: {
        recognition: this.recognition,
        cents: this.cents,
        shopcode: this.shopcode
      }
    })
  }
  resend() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_DEDUCT_RESEND,
      payload: this.recognition
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
