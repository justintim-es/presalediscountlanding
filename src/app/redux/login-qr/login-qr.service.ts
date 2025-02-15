import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_LOGIN_QR_FETCH_SUCCESS, rdxLoginQrFetch } from './reducer';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { Store } from '@ngrx/store';
import { getTokenToken } from '../token/selectors';
import { IDispatch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginQrService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginQrFetch),
      withLatestFrom(this.store.select(getTokenToken)), 
      switchMap(ac => aschax.get('/login-qr', {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let dispatch: IDispatch<string> = {
          type: RDX_LOGIN_QR_FETCH_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }))
    )
  })
}
