import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { getBalanceBalance, getBalanceFetchErrorMessage, getBalanceIsFetch, getBalanceIsFetchError, getBalanceIsFetchSuccess, getBalanceIsLatestFetch, getBalanceIsLatestFetchError, getBalanceIsLatestFetchSuccess, getBalanceIsResendFetch, RDX_BALANCE_FETCH, RDX_BALANCE_IS_LATEST, RDX_BALANCE_IS_RESEND_FETCH, RDX_BALANCE_IS_RESEND_FETCH_SUCCESS } from 'src/app/redux/balance/reducer';
import { IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnDestroy {
  sub: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  balance: Observable<number>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  isLatestFetch: Observable<boolean>;
  isLatestFetchSuccess: Observable<boolean>;
  isLatestFetchError: Observable<boolean>;
  isResendFetch: Observable<boolean>;
  recognition: string;
  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.recognition = '';
    this.sub = this.route.paramMap.subscribe(res => {
      this.recognition = res.get('recognition')!;
      this.store.dispatch<IDispatch<string>>({
        type: RDX_BALANCE_FETCH,
        payload: res.get('recognition')!
      });
      this.store.dispatch<IDispatch<string>>({
        type: RDX_BALANCE_IS_LATEST,
        payload: res.get('recognition')!
      })
    });
    this.isFetch = this.store.select(getBalanceIsFetch);
    this.isFetchSuccess = this.store.select(getBalanceIsFetchSuccess);
    this.balance = this.store.select(getBalanceBalance);
    this.isFetchError = this.store.select(getBalanceIsFetchError);
    this.fetchErrorMessage = this.store.select(getBalanceFetchErrorMessage);
    this.isLatestFetch = this.store.select(getBalanceIsLatestFetch);
    this.isLatestFetchSuccess = this.store.select(getBalanceIsLatestFetchSuccess);
    this.isLatestFetchError = this.store.select(getBalanceIsLatestFetchError);
    this.isResendFetch = this.store.select(getBalanceIsResendFetch);
  }
  resend() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_BALANCE_IS_RESEND_FETCH,
      payload: this.recognition
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
