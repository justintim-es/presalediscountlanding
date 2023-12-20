import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { RDX_UNEXPECTED_FETCH_ERROR, RDX_UNEXPECTED_FETCH_SUCCESS, rdxUnexpectedFetch } from './actions';
import { AxiosError } from 'axios';
import { getUnexpectedRoute } from './selectors';

@Injectable({
  providedIn: 'root'
})
export class UnexpectedService {

  constructor(
    private store: Store,
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxUnexpectedFetch),
      withLatestFrom(this.store.select(getUnexpectedRoute)),
      switchMap(ac => aschax.post('/unexpected', {
        route: ac[1],
        explanation: ac[0].payload
      }).then(res => {
        return {
          type: RDX_UNEXPECTED_FETCH_SUCCESS
        }
      }).catch((err: AxiosError) => {
        return {
          type: RDX_UNEXPECTED_FETCH_ERROR,
        }
      }))
    )
  })
}
