import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_RESET_FETCH_ERROR, RDX_RESET_FETCH_SUCCESS, rdxResetFetch } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';
import { IFetchErrorMessage } from '../deduct/reducer';
import { RDX_REGISTER_FETCH_ERROR } from '../register/actions';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxResetFetch),
      switchMap(ac => aschax.post('/reset/' + ac.payload?.token, {
        first_password: ac.payload?.first,
        second_password: ac.payload?.second
      }).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_RESET_FETCH_SUCCESS
        };
        return dispatch;
      }).catch((err: AxiosError<any>) => {
        let dispatch: IDispatch<IFetchErrorMessage> = {
          type: RDX_RESET_FETCH_ERROR,
          payload: {
            is: true,
            formcontrol: err.response?.data.error,
            message: err.response?.data.message
          }
        };
        return dispatch;
      }))
    )
  })
}
