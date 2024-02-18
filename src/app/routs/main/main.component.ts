import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMainCardsFetchSuccess, RDX_MAIN_CARDS_FETCH, RDX_MAIN_MENU_TOGGLE } from 'src/app/redux/main/actions';
import { getMainCards, getMainIsFetch, getMainIsFetchSuccess, getMainIsMenu } from 'src/app/redux/main/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isMenu: Observable<boolean>;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  cards: Observable<IMainCardsFetchSuccess[]>;
  constructor(
    private store: Store
  ) {
    this.isMenu = this.store.select(getMainIsMenu);
    this.isFetch = this.store.select(getMainIsFetch);
    this.isFetchSuccess = this.store.select(getMainIsFetchSuccess);
    this.cards = this.store.select(getMainCards);
  }
  menuToggle() {
    this.store.dispatch({
      type: RDX_MAIN_MENU_TOGGLE
    })
  }
  ngOnInit(): void {
    this.store.dispatch({
      type: RDX_MAIN_CARDS_FETCH
    })
  }
}
