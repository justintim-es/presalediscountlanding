import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_LOGIN_DASHBOARD_FETCH, RDX_LOGIN_DASHBOARD_FETCH_ERROR, RDX_LOGIN_DASHBOARD_FETCH_SUCCESS, RDX_LOGIN_DASHBOARD_IS_ROUTE_THROUGH_TRUE, rdxLoginDashboardFetch, rdxLoginDashboardFetchSuccess } from './actions';
import { delay, map, switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { AxiosError } from 'axios';
import { RDX_TOKEN_SET, rdxTokenSet } from '../token/actions';

@Injectable({
  providedIn: 'root'
})
export class LoginDashboardService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginDashboardFetch),
      switchMap(ac => aschax.post('/login-dashboard', ac.payload!).then(res => {
        return {
          type: RDX_LOGIN_DASHBOARD_FETCH_SUCCESS,
          payload: res.data
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_LOGIN_DASHBOARD_FETCH_ERROR,
          payload: err.response?.data
        }
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginDashboardFetchSuccess),
      map(ac => {
        return {
          type: RDX_TOKEN_SET,
          payload: ac.payload!.token
        }
      })
    )
  })
  fetchSuccessOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginDashboardFetchSuccess),
      delay(1000),
      map(ac => {
        return {
          type: RDX_LOGIN_DASHBOARD_IS_ROUTE_THROUGH_TRUE
        }
      })
    )
  })
  
}
