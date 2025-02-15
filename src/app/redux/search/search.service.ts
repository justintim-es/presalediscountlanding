import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ISearch, RDX_SEARCH_FETCH_SUCCESS, rdxSearchFetch } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../interfaces';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxSearchFetch),
      switchMap(ac => aschax.get('/search/' + ac.payload).then((res: AxiosResponse<ISearch[]>) => {
        let dispatch: IDispatch<ISearch[]> = {
          type: RDX_SEARCH_FETCH_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }).catch(err => {
        return {
          type: RDX_SEARCH_FETCH_SUCCESS
        }
      }))
    )
  })
}
