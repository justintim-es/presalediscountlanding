import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction } from '@ngrx/store';
import { RDX_BALANCE_FETCH_ERROR, RDX_BALANCE_FETCH_SUCCESS, RDX_BALANCE_IS_LATEST_ERROR, RDX_BALANCE_IS_LATEST_SUCCESS, RDX_BALANCE_IS_RESEND_FETCH_SUCCESS, rdxBalanceFetch, rdxBalanceIsLatest, rdxBalanceIsResendFetch } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBalanceFetch),
      switchMap(ac => aschax.get('/balance/' + ac.payload!).then(res => {
        let dispatch: IDispatch<number> = {
          type: RDX_BALANCE_FETCH_SUCCESS,
          payload: res.data.balance
        }
        return dispatch;
      }).catch((err: AxiosError<any>) => {
        let dispatch: IDispatch<string> = {
          type: RDX_BALANCE_FETCH_ERROR,
          payload: err.response?.data
        };
        return dispatch;
      }))
    )
  })
  fetchislatest = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBalanceIsLatest),
      switchMap(ac => aschax.get('/is-latest/' + ac.payload).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_BALANCE_IS_LATEST_SUCCESS
        };
        return dispatch;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BALANCE_IS_LATEST_ERROR
        }
      }))
    )
  })
  resend = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxBalanceIsResendFetch),
      switchMap(ac => aschax.post('/resend-latest/' + ac.payload).then(res => {
        let dispatch: IDispatch<string> = {
          type: RDX_BALANCE_IS_RESEND_FETCH_SUCCESS
        };
        return dispatch;
      }).catch((err: AxiosError) => {
        return {
          type: RDX_BALANCE_IS_RESEND_FETCH_SUCCESS
        }
      }))
    )
  })
}
