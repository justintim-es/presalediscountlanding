import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RDX_BUY_CARDS_FETCH_ERROR, RDX_BUY_CARDS_FETCH_SUCCESS, rdxBuyCardsFetch, rdxBuyCardsFetchError } from './actions';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBuyCardsFetch),
      withLatestFrom(this.store.select(rdxBuyCardsFetchError)),
      switchMap(ac => aschax.get('/buy/' + ac[0].payload!).then(res => {
        return {
          type: RDX_BUY_CARDS_FETCH_SUCCESS,
          payload: res.data
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BUY_CARDS_FETCH_ERROR,
          payload: err.response?.data
        }
      }))
    )
  })
}
