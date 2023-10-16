import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_REGISTER_FETCH_ERROR, RDX_REGISTER_FETCH_SUCCESS, rdxRegisterFetch } from './actions';
import { switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterFetch),
      switchMap(ac => aschax.post('/register', ac.payload!).then(res => {
        let dispatch: IDispatch<null> = {
          type: RDX_REGISTER_FETCH_SUCCESS,
        };
        return dispatch;
      }).catch((err: AxiosError<string>) => {
        let dispatch: IDispatch<string> = {
          type: RDX_REGISTER_FETCH_ERROR,
          payload: err.response?.data
        };
        return dispatch;
      })
    ));
  })
}
