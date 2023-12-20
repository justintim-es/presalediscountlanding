import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IRegisterFetchError, RDX_REGISTER_FETCH_ERROR, RDX_REGISTER_FETCH_SUCCESS, RDX_REGISTER_IS_ROUTE_PLEASE_TRUE, rdxRegisterFetch, rdxRegisterFetchError, rdxRegisterFetchSuccess } from './actions';
import { delay, map, switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';
import { RDX_UNEXPECTED_IS_TRUE } from '../unexpected/actions';

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
      }).catch((err: AxiosError<IRegisterFetchError>) => {
        if (err.response?.status == 400) {
          let dispatch: IDispatch<IRegisterFetchError> = {
            type: RDX_REGISTER_FETCH_ERROR,
            payload: err.response.data
          };
          return dispatch;
        } else {
          let dispatch: IDispatch<string> = {
            type: RDX_UNEXPECTED_IS_TRUE,
            payload: '/register'
          };
          return dispatch;
        }

      })
    ));
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterFetchSuccess),
      delay(1000),
      map(ac => {
        return {
          type: RDX_REGISTER_IS_ROUTE_PLEASE_TRUE
        }
      })      
    )
  })
  // fetchError = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(rdxRegisterFetchError),
  //     map(ac => {
  //       let dispatch: IDispatch<IUnexpectedFetch> = {
  //         type: RDX_UNEXPECTED_FETCH,
  //         payload: {
  //           route: 
  //         }
  //       }
  //       return {
  //         type: RDX_UNEXPECTED_FETCH,
  //         payload: ac.payload
  //       }
  //     })
  //   )
  // })
}
