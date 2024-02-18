import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RDX_MAIN_CARDS_FETCH, RDX_MAIN_CARDS_FETCH_SUCCESS, rdxMainCardsFetch } from './actions';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { getTokenToken } from '../token/selectors';
import { RDX_MAIN_CREATE_CARD_FETCH_SUCCESS } from '../main-create-card/actions';

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
}
