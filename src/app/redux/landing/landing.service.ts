import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_LANDING_HERO_HALF_SLIDE_FOUR, RDX_LANDING_HERO_HALF_SLIDE_ONE, RDX_LANDING_HERO_HALF_SLIDE_THREE, RDX_LANDING_HERO_HALF_SLIDE_TWO, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF_DELAY, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_ON, RDX_LANDING_PRESALE_DISCOUNT_NOTHING, rdxLandingHeroHalfSlideFour, rdxLandingHeroHalfSlideOne, rdxLandingHeroHalfSlideThree, rdxLandingHeroHalfSlideTwo, rdxLandingInit, rdxLandingPresaleDiscountElectrocute, rdxLandingPresaleDiscountElectrocuteOff, rdxLandingPresaleDiscountElectrocuteOffDelay, rdxLandingPresaleDiscountElectrocuteOn } from './actions';
import { delay, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { IDispatch } from '../interfaces';
import { Store } from '@ngrx/store';
import { getLandingIsAlive } from './selectors';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }
  init = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingInit),
      delay(999),
      mergeMap(ac => {
        let dispatchs: IDispatch<null>[] = [

          {
            type: RDX_LANDING_HERO_HALF_SLIDE_ONE
          }
        ];
        return dispatchs;
      })
    )
  })


  heroHalfSlideOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingHeroHalfSlideOne),
      withLatestFrom(this.store.select(getLandingIsAlive)),
      delay(1),
      map(ac => {
        if (ac[1]) {
          let dispatch: IDispatch<null> = {
            type: RDX_LANDING_HERO_HALF_SLIDE_TWO
          }
          return dispatch;
        } else {
          let dispatch: IDispatch<null> = {
            type: RDX_LANDING_PRESALE_DISCOUNT_NOTHING
          };
          return dispatch;
        } 

      })
    )
  })
  heroHalfSlideTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingHeroHalfSlideTwo),
      delay(1999),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_HERO_HALF_SLIDE_THREE
        }
        return dispatch;
      })
    )
  })
  heroHalfSlideThree = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingHeroHalfSlideThree),
      delay(1),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_HERO_HALF_SLIDE_FOUR
        }
        return dispatch;
      })
    )
  })
  heroHalfSlideFour = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingHeroHalfSlideFour),
      delay(999),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_HERO_HALF_SLIDE_ONE
        }
        return dispatch;
      })
    )
  })
}
