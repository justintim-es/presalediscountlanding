import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_ONBOARD_FETCH_ERROR, RDX_ONBOARD_FETCH_SUCCESS, rdxOnboardFetch } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOnboardFetch),
      switchMap(ac => aschax.post('/onboard/' + ac.payload!).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_ONBOARD_FETCH_SUCCESS,
        }
        return dispatch;
      }).catch((err: AxiosError<string>) => {
        let dispatch: IDispatch<string> = {
          type: RDX_ONBOARD_FETCH_ERROR,
          payload: err.response?.data
        }
        return dispatch;
      }))
    )
  })
}
