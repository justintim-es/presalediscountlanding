import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RDX_LANDING_HERO_HALF_SLIDE_FOUR, RDX_LANDING_HERO_HALF_SLIDE_ONE, RDX_LANDING_HERO_HALF_SLIDE_THREE, RDX_LANDING_HERO_HALF_SLIDE_TWO, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF_DELAY, RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_ON, rdxLandingHeroHalfSlideFour, rdxLandingHeroHalfSlideOne, rdxLandingHeroHalfSlideThree, rdxLandingHeroHalfSlideTwo, rdxLandingInit, rdxLandingPresaleDiscountElectrocute, rdxLandingPresaleDiscountElectrocuteOff, rdxLandingPresaleDiscountElectrocuteOffDelay, rdxLandingPresaleDiscountElectrocuteOn } from './actions';
import { delay, map, mergeMap } from 'rxjs/operators';
import { IDispatch } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private actions: Actions
  ) { }
  init = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingInit),
      delay(2000),
      mergeMap(ac => {
        let dispatchs: IDispatch<null>[] = [
          {
            type: RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE
          },
          {
            type: RDX_LANDING_HERO_HALF_SLIDE_ONE
          }
        ];
        return dispatchs;
      })
    )
  })
  electrocute = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingPresaleDiscountElectrocute),
      delay(1),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF          
        };
        return dispatch;
      })
    )
  })
  electrocuteOff = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingPresaleDiscountElectrocuteOff),
      delay(249),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_ON,
        };
        return dispatch;
      })
    )
  })
  electrocuteOn = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingPresaleDiscountElectrocuteOn),
      delay(251),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF_DELAY,
        };
        return dispatch;
      })
    )
  })
  electrocuteOffDelay = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingPresaleDiscountElectrocuteOffDelay),
      delay(1000),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_PRESALE_DISCOUNT_ELECTROCUTE_OFF
        };
        return dispatch;
      })
    )
  })

  heroHalfSlideOne = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingHeroHalfSlideOne),
      delay(1),
      map(ac => {
        let dispatch: IDispatch<null> = {
          type: RDX_LANDING_HERO_HALF_SLIDE_TWO
        }
        return dispatch;
      })
    )
  })
  heroHalfSlideTwo = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLandingHeroHalfSlideTwo),
      delay(999),
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
