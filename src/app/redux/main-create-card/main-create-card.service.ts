import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RDX_MAIN_CREATE_CARD_FETCH, RDX_MAIN_CREATE_CARD_FETCH_ERROR, RDX_MAIN_CREATE_CARD_FETCH_SUCCESS, RDX_MAIN_CREATE_CARD_ROUTE_BACK, rdxMainCreateCardFetch, rdxMainCreateCardFetchSuccess, rdxMainCreateCardRouteBack } from './actions';
import { delay, map, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { AxiosError } from 'axios';
import { getTokenToken } from '../token/selectors';

@Injectable({
  providedIn: 'root'
})
export class MainCreateCardService {

  constructor(
    private actions: Actions,
    private store: Store
    
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCreateCardFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/create-card', ac[0].payload!, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CREATE_CARD_FETCH_SUCCESS,
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_MAIN_CREATE_CARD_FETCH_ERROR,
          payload: err.response?.data
        }
      }) 
    ));
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCreateCardFetchSuccess),
      delay(1000),
      map(ac => {
        return {
          type: RDX_MAIN_CREATE_CARD_ROUTE_BACK
        }
      })
    )
  })
}
