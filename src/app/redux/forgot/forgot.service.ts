import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActConfig } from '@ngrx/effects/src/act';
import { RDX_FORGOT_FETCH_SUCCESS, rdxForgotFetch } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxForgotFetch),
      switchMap(ac => aschax.post('/send-reset', {
        email: ac.payload!
      }).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_FORGOT_FETCH_SUCCESS
        }
        return dispatch;
      }).catch(err => {
        let dispatch: IDispatch<any> = {
          type: RDX_FORGOT_FETCH_SUCCESS
        };
        return dispatch;
      }))
    )
  })
}
