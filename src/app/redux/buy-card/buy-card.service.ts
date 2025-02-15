import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RDX_BUY_CARD_FETCH_INFO_SUCCESS, RDX_BUY_CARD_PROCEED_SUCCESS, rdxBuyCardFetchInfo, rdxBuyCardProceed } from './reducer';
import { switchMap } from 'rxjs';
import axios from 'axios';
import { aschax } from 'src/app/aschax';
import { IBuyCard, IDispatch } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class BuyCardService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyCardFetchInfo),
      switchMap(ac => aschax.get(`/buy-card/${ac.payload?.shopId}/${ac.payload?.cardId}`).then(res => {
        let dispatch: IDispatch<{ card: IBuyCard, shop: string }> = {
          type: RDX_BUY_CARD_FETCH_INFO_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }))
    )
  })
  proceed = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyCardProceed),
      switchMap(ac => aschax.post('/session/' + ac.payload?.cardId, {
        email: ac.payload?.email
      }).then(res => {
        return {
          type: RDX_BUY_CARD_PROCEED_SUCCESS,
          payload: res.data
        }
      }))
    )
  })
}
