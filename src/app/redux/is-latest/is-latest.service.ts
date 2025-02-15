import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_IS_LATEST_FETCH_ERROR, RDX_IS_LATEST_FETCH_SUCCESS, rdxIsLatestFetch } from './reducer';
import { switchMap } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { AxiosError } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class IsLatestService {

  constructor(
    private actions: Actions
  ) { }
  isLatest = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxIsLatestFetch),
      switchMap(ac => aschax.get('/is-latest/' + ac.payload).then(res => {
        return {
          type: RDX_IS_LATEST_FETCH_SUCCESS
        }
      }).catch((err: AxiosError<any>) => {
        return {
          type: RDX_IS_LATEST_FETCH_ERROR
        }
      }))
    )
  })
}
