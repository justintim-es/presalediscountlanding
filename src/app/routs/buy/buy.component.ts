import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { RDX_BUY_CARDS_FETCH, RDX_BUY_CARDS_FETCH_SUCCESS } from 'src/app/redux/buy/actions';
import { getBuyCards, getBuyCompanyName, getBuyFetchErrorMessage, getBuyIsFetch, getBuyIsFetchError, getBuyIsFetchSuccess } from 'src/app/redux/buy/selectors';
import { enterFromLeft, enterFromRight } from 'src/app/animations';
import { IBuyCard } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
  animations: [
  	enterFromLeft,
  	enterFromRight
  ]
})
export class BuyComponent {
  sub: SubscriptionLike;
  id: number;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  cards: Observable<IBuyCard[]>;
  companyName: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.id = 0;
    this.sub = this.route.paramMap.subscribe(res => {
      this.id = parseInt(res.get('id')!);
    })
    this.store.dispatch({
      type: RDX_BUY_CARDS_FETCH,
      payload: this.id,
    })
    this.isFetch = this.store.select(getBuyIsFetch);
    this.isFetchSuccess = this.store.select(getBuyIsFetchSuccess);
    this.isFetchError = this.store.select(getBuyIsFetchError);
    this.fetchErrorMessage = this.store.select(getBuyFetchErrorMessage);
    this.cards = this.store.select(getBuyCards);
    this.companyName = this.store.select(getBuyCompanyName);
  }
}
