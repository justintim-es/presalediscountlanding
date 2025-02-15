import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ICardInfoFetchSuccess, RDX_CARD_INFO_DELETE_SUCCESS, RDX_CARD_INFO_FETCH_SUCCESS, rdxCardInfoDelete, rdxCardInfoFetch } from './reducer';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosResponse } from 'axios';
import { Store } from '@ngrx/store';
import { getTokenToken } from '../token/selectors';

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCardInfoFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/card-info/' + ac[0].payload, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then((res: AxiosResponse<ICardInfoFetchSuccess>) => {
        let dispatch: IDispatch<ICardInfoFetchSuccess> = {
          type: RDX_CARD_INFO_FETCH_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }))
    )
  })
  delete = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCardInfoDelete),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.delete('/delete-card/' + ac[0].payload, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_CARD_INFO_DELETE_SUCCESS
        };
        return dispatch;
      }))
    )
  })
}
