import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { electrocutePresaleDiscount, enterFromBottom, enterFromTopText, heroHalfSlide } from 'src/app/animations';
import { IDispatch } from 'src/app/redux/interfaces';
import { RDX_LANDING_HERO_HALF_SLIDE_ONE, RDX_LANDING_INIT, RDX_LANDING_PRESALE_DISCOUNT_IS_ALIVE_FALSE } from 'src/app/redux/landing/actions';
import { getLandingBottomBelowState, getLandingBottomState, getLandingFirstBelowSlideValue, getLandingIsBottom, getLandingIsBottomBelow, getLandingIsTop, getLandingIsTopBelow, getLandingPDState, getLandingSecondBelowSlideValue, getLandingTopBelowState, getLandingTopState } from 'src/app/redux/landing/selectors';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    heroHalfSlide,
    enterFromTopText,
    electrocutePresaleDiscount,
    enterFromBottom
  ]
})
export class LandingComponent implements OnInit, OnDestroy {
  PDState: Observable<string>;
  topState: Observable<string>;
  bottomState: Observable<string>;
  topBelowState: Observable<string>;
  bottomBelowState: Observable<string>;
  isTop: Observable<boolean>;
  isBottom: Observable<boolean>;
  isTopBelow: Observable<boolean>;
  isBottomBelow: Observable<boolean>;
  firstBelowSlideValue: Observable<string>;
  secondBelowSlideValue: Observable<string>;
  demovalue!: number;
  demodiscount!: number;
  demovalueformcontrol: FormControl
  demodiscountformcontrol: FormControl;
  constructor(
    private store: Store,
    private router: Router
  ) {
    this.PDState = this.store.select(getLandingPDState);
    this.topState = this.store.select(getLandingTopState);
    this.bottomState = this.store.select(getLandingBottomState);
    this.topBelowState = this.store.select(getLandingTopBelowState);
    this.bottomBelowState = this.store.select(getLandingBottomBelowState);
    this.isTop = this.store.select(getLandingIsTop);
    this.isBottom = this.store.select(getLandingIsBottom);
    this.isTopBelow = this.store.select(getLandingIsTopBelow);
    this.isBottomBelow = this.store.select(getLandingIsBottomBelow);
    this.firstBelowSlideValue = this.store.select(getLandingFirstBelowSlideValue);
    this.secondBelowSlideValue = this.store.select(getLandingSecondBelowSlideValue);
    this.demovalueformcontrol = new FormControl('', [Validators.required])
    this.demodiscountformcontrol = new FormControl('', [Validators.required])
  }
  ngOnInit(): void {
    this.store.dispatch<IDispatch<any>>({
      type: RDX_LANDING_INIT
    })
    // this.store.dispatch<IDispatch<any>>({
    //   type: RDX_LANDING_HERO_HALF_SLIDE_ONE
    // })
  }
  visit() {
    this.demodiscountformcontrol.markAsTouched();
    this.demovalueformcontrol.markAsTouched();
    if (!this.demodiscountformcontrol.hasError('required') && !this.demovalueformcontrol.hasError('required')) this.router.navigate([`/demo/${this.demovalue}/${this.demodiscount}`]);
  }
  ngOnDestroy(): void {
    this.store.dispatch<IDispatch<any>>({
      type: RDX_LANDING_PRESALE_DISCOUNT_IS_ALIVE_FALSE
    })
  }
}
