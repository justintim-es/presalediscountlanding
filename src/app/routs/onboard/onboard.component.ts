import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IDispatch } from 'src/app/redux/interfaces';
import { getOnboardFetchErrorMessage, getOnboardIsFetch, getOnboardIsFetchError, getOnboardIsFetchSuccess, RDX_ONBOARD_FETCH } from 'src/app/redux/onboard/reducer';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  activatedsub: SubscriptionLike;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.isFetch = this.store.select(getOnboardIsFetch);
    this.isFetchSuccess = this.store.select(getOnboardIsFetchSuccess);
    this.isFetchError = this.store.select(getOnboardIsFetchError);
    this.fetchErrorMessage = this.store.select(getOnboardFetchErrorMessage);
    this.activatedsub = this.activatedRoute.paramMap.subscribe(res => {
      this.store.dispatch<IDispatch<string>>({
        type: RDX_ONBOARD_FETCH,
        payload: res.get('recognition')!
      })
    });

  }
}
