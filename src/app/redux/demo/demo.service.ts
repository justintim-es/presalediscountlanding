import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { rdxdemofetcha, rdxdemofetchsuccess } from './reducer';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxdemofetcha),
      switchMap(ac => aschax.get('/demo-checkout/' + ac.payload).then(res => {
        return {
          type: rdxdemofetchsuccess,
          payload: res.data
        }
      }))
    )
  })
}
