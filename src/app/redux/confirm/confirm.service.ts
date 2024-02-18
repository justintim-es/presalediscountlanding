import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction } from '@ngrx/store';
import { RDX_CONFIRM_FETCH_ERROR, RDX_CONFIRM_FETCH_SUCCESS, RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE, rdxConfirmFetch, rdxConfirmFetchSuccess } from './actions';
import { delay, map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { AxiosError } from 'axios';
import { RDX_UNEXPECTED_IS_TRUE } from '../unexpected/actions';
import { IDispatch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmFetch),
      switchMap(ac => aschax.post(`/confirm/${ac.payload!}`, null).then(res => {
        return {
          type: RDX_CONFIRM_FETCH_SUCCESS,
          payload: res.data
        }
      }).catch((err: AxiosError<string>) => {
        if (err.response?.status == 400) {
          let disptach: IDispatch<string> = {
            type: RDX_CONFIRM_FETCH_ERROR,
            payload: err.response.data
          };
          return disptach;
        } else {
          let disptach: IDispatch<string> = {
            type: RDX_UNEXPECTED_IS_TRUE,
            payload: '/confirm'
          };
          return disptach;
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxConfirmFetchSuccess),
      delay(2500),
      map(ac => {
        return {
          type: RDX_CONFIRM_IS_ROUTE_LOGIN_TRUE
        } 
      })
    )
  })
}
