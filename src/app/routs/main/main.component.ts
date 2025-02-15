import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enterFromLeft, enterFromRight } from 'src/app/animations';
import { getLoginDashboardId } from 'src/app/redux/login-dashboard/selectors';
import { IMainCardsFetchSuccess, RDX_MAIN_CARDS_FETCH, RDX_MAIN_IS_VISIBLE_FETCH, RDX_MAIN_LOGIN, RDX_MAIN_MENU_TOGGLE } from 'src/app/redux/main/actions';
import { getMainCards, getMainIsFetch, getMainIsFetchSuccess, getMainIsLoginFetch, getMainIsLoginFetchSuccess, getMainIsMenu, getMainIsVisible, getMainIsVisibleFetch, getMainLogin } from 'src/app/redux/main/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    enterFromLeft,
    enterFromRight
  ]
})
export class MainComponent implements OnInit {
  isMenu: Observable<boolean>;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  cards: Observable<IMainCardsFetchSuccess[]>;
  isLoginFetch: Observable<boolean>;
  isLoginFetchSuccess: Observable<boolean>;
  login: Observable<string>;
  id: Observable<number>;
  isVisible: Observable<boolean>;
  isVisibleFetch: Observable<boolean>;
  panelOpenState = false;

  constructor(
    private store: Store
  ) {
    this.isMenu = this.store.select(getMainIsMenu);
    this.isFetch = this.store.select(getMainIsFetch);
    this.isFetchSuccess = this.store.select(getMainIsFetchSuccess);
    this.cards = this.store.select(getMainCards);
    this.isLoginFetch = this.store.select(getMainIsLoginFetch);
    this.isLoginFetchSuccess = this.store.select(getMainIsLoginFetchSuccess);
    this.login = this.store.select(getMainLogin);
    this.id = this.store.select(getLoginDashboardId);
    this.isVisible = this.store.select(getMainIsVisible);
    this.isVisibleFetch = this.store.select(getMainIsVisibleFetch)
  }
  menuToggle() {
    this.store.dispatch({
      type: RDX_MAIN_MENU_TOGGLE
    })
  }
  visibility(id: number) {
    this.store.dispatch({
      type: RDX_MAIN_IS_VISIBLE_FETCH,
      payload: id
    })
  }
  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_MAIN_CARDS_FETCH
    });
    this.store.dispatch({
      type: RDX_MAIN_LOGIN
    })
  }
}
