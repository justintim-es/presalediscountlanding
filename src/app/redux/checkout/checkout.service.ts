import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_CHECKOUT_FETCH_ERROR, RDX_CHECKOUT_FETCH_SUCCESS, RDX_CHECKOUT_RESEND_SUCCESS, rdxCheckoutFetch, rdxCheckoutResend } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCheckoutFetch),
      switchMap(ac => aschax.post('/checkout/' + ac.payload!).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_CHECKOUT_FETCH_SUCCESS
        };
        return dispatch;
      }).catch((err: AxiosError<string>) => {
        let dispatch: IDispatch<string> = {
          type: RDX_CHECKOUT_FETCH_ERROR,
          payload: err.response?.data
        }
        return dispatch;
      }))
    )
  })
  resend = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxCheckoutResend),
      switchMap(ac => aschax.post('/resend/' + ac.payload!).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_CHECKOUT_RESEND_SUCCESS
        };
        return dispatch;
      }))
    )
  })
}
