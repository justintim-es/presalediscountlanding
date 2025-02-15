import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { getCheckoutFetchErrorMessage, getCheckoutIsFetch, getCheckoutIsFetchError, getCheckoutIsFetchSuccess, getCheckoutIsResend, RDX_CHECKOUT_FETCH, RDX_CHECKOUT_RESEND } from 'src/app/redux/checkout/reducer';
import { IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnDestroy {
  sub: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  recognition: string;
  isResend: Observable<boolean>;
  // isResendSuccess: Observable<boolean>;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.recognition = '';
    this.sub = this.activatedRoute.paramMap.subscribe(res => {
      this.recognition = res.get('recognition')!;
      this.store.dispatch<IDispatch<string>>({
        type: RDX_CHECKOUT_FETCH,
        payload: this.recognition
      })
    })
    this.isFetch = this.store.select(getCheckoutIsFetch);
    this.isFetchSuccess = this.store.select(getCheckoutIsFetchSuccess);
    this.isFetchError = this.store.select(getCheckoutIsFetchError);
    this.fetchErrorMessage = this.store.select(getCheckoutFetchErrorMessage);
    this.isResend = this.store.select(getCheckoutIsResend);
  }
  resend() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_CHECKOUT_RESEND,
      payload: this.recognition
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
