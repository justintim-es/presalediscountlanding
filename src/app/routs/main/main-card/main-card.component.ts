import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { getCardInfoData, getCardInfoIsDelete, getCardInfoIsDeleteSuccess, getCardInfoIsFetch, getCardInfoIsFetchSuccess, ICardInfoFetchSuccess, RDX_CARD_INFO_DELETE, RDX_CARD_INFO_FETCH } from 'src/app/redux/card-info/reducer';
import { IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnDestroy {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  carddata: Observable<ICardInfoFetchSuccess>;
  routesub: SubscriptionLike;
  isDelete: Observable<boolean>;
  isDeleteSuccess: SubscriptionLike;
  id!: number;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isFetch = this.store.select(getCardInfoIsFetch);
    this.isFetchSuccess = this.store.select(getCardInfoIsFetchSuccess);
    this.carddata = this.store.select(getCardInfoData);
    this.routesub = this.route.paramMap.subscribe(res => {
      this.id = parseInt(res.get('id')!);
      this.store.dispatch<IDispatch<number>>({
        type: RDX_CARD_INFO_FETCH,
        payload: parseInt(res.get('id')!)
      })
    })
    this.isDelete = this.store.select(getCardInfoIsDelete);
    this.isDeleteSuccess = this.store.select(getCardInfoIsDeleteSuccess).subscribe(res => {
      if (res) this.router.navigate(['/main']);
    })

  }
  delete() {
    this.store.dispatch<IDispatch<number>>({
      type: RDX_CARD_INFO_DELETE,
      payload: this.id
    })
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
  }
}
