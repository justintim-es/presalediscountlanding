import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IFetchErrorMessage, RDX_DEDUCT_FETCH_ERROR, RDX_DEDUCT_FETCH_SUCCESS, RDX_DEDUCT_RESEND_SUCCESS, rdxDeductFetch, rdxDeductFetchSuccess, rdxDeductResend } from './reducer';
import { map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';
import { RDX_UNEXPECTED_IS_TRUE } from '../unexpected/actions';
import { RDX_IS_LATEST_FETCH } from '../is-latest/reducer';

@Injectable({
  providedIn: 'root'
})
export class DeductService {

  constructor(
    private actions: Actions
  ) { }
  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxDeductFetch),
      switchMap(ac => aschax.post(`/deduct/${ac.payload?.shopcode}/${ac.payload?.recognition}`, {
        value: ac.payload!.cents
      }).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_DEDUCT_FETCH_SUCCESS
        };
        return dispatch;
      }).catch((err: AxiosError<any>) => {
        let dispatch: IDispatch<IFetchErrorMessage> = {
          type: RDX_DEDUCT_FETCH_ERROR,
          payload: {
            is: true,
            formcontrol: err.response?.data.formcontrol,
            message: err.response?.data.message
          }
        };
        return dispatch;
      })))
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxDeductFetchSuccess),
      map(ac => {
        return {
          type: RDX_IS_LATEST_FETCH
        }
      })
    )
  })
  
  resend = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxDeductResend),
      switchMap(ac => aschax.post('/resend-latest/' + ac.payload!).then(res => {
        return {
          type: RDX_DEDUCT_RESEND_SUCCESS
        }
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_UNEXPECTED_IS_TRUE
        }
      }))
    )
  })
}
