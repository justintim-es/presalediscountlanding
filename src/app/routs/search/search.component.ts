import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { heroHalfSlide } from 'src/app/animations';
import { IDispatch } from 'src/app/redux/interfaces';
import { RDX_LANDING_INIT, RDX_LANDING_PRESALE_DISCOUNT_IS_ALIVE_FALSE } from 'src/app/redux/landing/actions';
import { getLandingBottomBelowState, getLandingBottomState, getLandingIsBottom, getLandingIsBottomBelow, getLandingIsTop, getLandingIsTopBelow, getLandingPDState, getLandingTopBelowState, getLandingTopState } from 'src/app/redux/landing/selectors';
import { getSearchIsFetch, getSearchIsFetchSuccess, getSearchSearches, ISearch, RDX_SEARCH_FETCH } from 'src/app/redux/search/reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    heroHalfSlide
  ]
})
export class SearchComponent implements OnInit, OnDestroy {
  PDState: Observable<string>;
  topState: Observable<string>;
  bottomState: Observable<string>;
  topBelowState: Observable<string>;
  bottomBelowState: Observable<string>;
  isTop: Observable<boolean>;
  isBottom: Observable<boolean>;
  isTopBelow: Observable<boolean>;
  isBottomBelow: Observable<boolean>;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  searches: Observable<ISearch[]>;
  errormatcher: ErrorStateMatcher;

  searchvalue!: string;
  searchvalueformcontrol: FormControl;
  constructor(
    private store: Store
  ) {
    this.PDState = this.store.select(getLandingPDState);
    this.topState = this.store.select(getLandingTopState);
    this.bottomState = this.store.select(getLandingBottomState);
    this.topBelowState = this.store.select(getLandingTopBelowState);
    this.bottomBelowState = this.store.select(getLandingBottomBelowState);
    this.isTop = this.store.select(getLandingIsTop);
    this.isBottom = this.store.select(getLandingIsBottom);
    this.isTopBelow = this.store.select(getLandingIsTopBelow);
    this.isBottomBelow = this.store.select(getLandingIsBottomBelow);
    this.isFetch = this.store.select(getSearchIsFetch);
    this.isFetchSuccess = this.store.select(getSearchIsFetchSuccess);
    this.searches = this.store.select(getSearchSearches);
    this.searchvalue = '';
    this.searchvalueformcontrol = new FormControl('', [
      Validators.required
    ]);
    this.errormatcher = new ErrorStateMatcher();
    
  }
  ngOnInit(): void {
    this.store.dispatch<IDispatch<any>>({
      type: RDX_LANDING_INIT
    })
  }
  search() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_SEARCH_FETCH,
      payload: this.searchvalue
    })
  }
  capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  ngOnDestroy(): void {
    this.store.dispatch<IDispatch<any>>({
      type: RDX_LANDING_PRESALE_DISCOUNT_IS_ALIVE_FALSE
    })
  }
}
