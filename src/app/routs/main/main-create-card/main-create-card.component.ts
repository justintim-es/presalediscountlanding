import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterFromLeft, enterFromRight } from 'src/app/animations';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IDispatch } from 'src/app/redux/interfaces';
import { IMainCreateCardFetch, RDX_MAIN_CREATE_CARD_FETCH } from 'src/app/redux/main-create-card/actions';
import { getMainCreateCardFetchErrorMessage, getMainCreateCardIsFetch, getMainCreateCardIsFetchError, getMainCreateCardIsFetchSuccess, getMainCreateCardRouteBack } from 'src/app/redux/main-create-card/selectors';

@Component({
  selector: 'app-main-create-card',
  templateUrl: './main-create-card.component.html',
  styleUrls: ['./main-create-card.component.css'],
  animations: [
    enterFromLeft,
    enterFromRight
  ]
})
export class MainCreateCardComponent {
  value: number;
  discount: number;

  valueFormControl: FormControl;
  discountFormControl: FormControl;

  errorStateMatcher: MyErrorStateMatcher;

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  routeBack: SubscriptionLike;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.value = 0;
    this.discount = 0;

    this.valueFormControl = new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]);
    this.discountFormControl = new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();

    this.isFetch = this.store.select(getMainCreateCardIsFetch);
    this.isFetchSuccess = this.store.select(getMainCreateCardIsFetchSuccess);
    this.isFetchError = this.store.select(getMainCreateCardIsFetchError);
    this.fetchErrorMessage = this.store.select(getMainCreateCardFetchErrorMessage);
    this.routeBack = this.store.select(getMainCreateCardRouteBack).subscribe(res => {
      if (res) {
        this.router.navigate(['/main'])
      }
    });
  }
  fetch() {
    console.log(this.value);
    console.log(this.discount);
    this.store.dispatch<IDispatch<IMainCreateCardFetch>>({
      type: RDX_MAIN_CREATE_CARD_FETCH,
      payload: {
        value: this.value,
        discount: this.discount
      }
    })
  }
}
