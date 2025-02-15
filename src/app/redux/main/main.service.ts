import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RDX_MAIN_CARDS_FETCH, RDX_MAIN_CARDS_FETCH_SUCCESS, RDX_MAIN_IS_VISIBLE_FETCH_SUCCESS, RDX_MAIN_LOGIN_SUCCESS, rdxMainCardsFetch, rdxMainIsVisibleFetch, rdxMainIsVisibleFetchSuccess, rdxMainLogin } from './actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selectors';
import { RDX_MAIN_CREATE_CARD_FETCH_SUCCESS } from '../main-create-card/actions';
import { IDispatch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  cardsFetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainCardsFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/cards', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        return {
          type: RDX_MAIN_CARDS_FETCH_SUCCESS,
          payload: res.data
        }
      }))
    )
  })
  login = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainLogin),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get('/stripe-login', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let dispatch: IDispatch<string> = {
          type: RDX_MAIN_LOGIN_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }))
    )
  })
  
  isvisible = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainIsVisibleFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/toggle-visibility/' + ac[0].payload, null, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_MAIN_IS_VISIBLE_FETCH_SUCCESS
        };
        return dispatch;
      }))
    )
  })
  isvisiblefetchsuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxMainIsVisibleFetchSuccess),
      map(ac => {
        return { type: RDX_MAIN_CARDS_FETCH }
      })
    )
  })
}
