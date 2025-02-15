import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterFromLeft, enterFromRight } from 'src/app/animations';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { getBuyCardCard, getBuyCardIsFetchInfo, getBuyCardIsFetchInfoSuccess, getBuyCardIsProceed, getBuyCardIsProceedSuccess, getBuyCardSessionUrl, getBuyCardShopName, IBuyCardFetchInfo, IBuyCardProceed, RDX_BUY_CARD_FETCH_INFO, RDX_BUY_CARD_PROCEED } from 'src/app/redux/buy-card/reducer';
import { IBuyCard, IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css'],
  animations: [
    enterFromLeft,
    enterFromRight
  ]
})
export class BuyCardComponent implements OnDestroy {
  sub: SubscriptionLike;
  isFetchInfo: Observable<boolean>;
  isFetchInfoSuccess: Observable<boolean>;
  card: Observable<IBuyCard>;
  shopName: Observable<string>;
  isProceed: Observable<boolean>;
  isProceedSuccess: Observable<boolean>;
  isproceedsuccesssub: SubscriptionLike;
  sessionurl: string;
  sessionurlsub: SubscriptionLike;
  email: string;
  confirmEmail: string;
  errorStateMatcher: MyErrorStateMatcher;
  form: FormGroup;
  shopId: number;
  cardId: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.sessionurl = '';
    this.shopId = 0;
    this.cardId = 0;
    this.sub = this.activatedRoute.paramMap.subscribe(res => {
      this.shopId = parseInt(res.get('shopId')!);
      this.cardId = parseInt(res.get('cardId')!)
      this.store.dispatch<IDispatch<IBuyCardFetchInfo>>({
        type: RDX_BUY_CARD_FETCH_INFO,
        payload: {
          shopId: this.shopId,
          cardId: this.cardId
        }
      });
    })
    this.email = '';
    this.confirmEmail = '';
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]]
    })
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetchInfo = this.store.select(getBuyCardIsFetchInfo);
    this.isFetchInfoSuccess = this.store.select(getBuyCardIsFetchInfoSuccess);
    this.card = this.store.select(getBuyCardCard);
    this.shopName = this.store.select(getBuyCardShopName);
    this.isProceed = this.store.select(getBuyCardIsProceed);
    this.isProceedSuccess = this.store.select(getBuyCardIsProceedSuccess);
    this.sessionurlsub = this.store.select(getBuyCardSessionUrl).subscribe(res => this.sessionurl = res);
    this.isproceedsuccesssub = this.store.select(getBuyCardIsProceedSuccess).subscribe(res => {
      if (res) window.location.href = this.sessionurl
    })
  }
  submit() {
    console.log(this.email);
    console.log(this.confirmEmail);
    if (this.email != this.confirmEmail) {
      this.form.controls['email'].setErrors({ different: true })
      this.form.controls['confirmEmail'].setErrors({ different: true });
    } else if (!this.form.controls['email'].hasError('required') && !this.form.controls['confirmEmail'].hasError('required') && !this.form.controls['email'].hasError('email') && !this.form.controls['confirmEmail'].hasError('email')) {
      this.store.dispatch<IDispatch<IBuyCardProceed>>({
        type: RDX_BUY_CARD_PROCEED,
        payload: {
          cardId: this.cardId,
          email: this.email
        }
      })
    } 
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
