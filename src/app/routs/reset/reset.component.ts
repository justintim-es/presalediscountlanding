import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IFetchErrorMessage } from 'src/app/redux/deduct/reducer';
import { IDispatch } from 'src/app/redux/interfaces';
import { getResetFetchError, getResetIsFetch, getResetIsFetchSuccess, IResetFetch, RDX_RESET_FETCH } from 'src/app/redux/reset/reducer';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnDestroy {
  formgroup: FormGroup;
  first!: string;
  second!: string;
  token!: string;
  hidefirst: boolean;
  hidesecond: boolean;
  routesub: SubscriptionLike;

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  fetchError: Observable<IFetchErrorMessage>;
  fetchErrorSub: SubscriptionLike;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private route: ActivatedRoute
  )  {;
    this.hidefirst = true;
    this.hidesecond = true;
    this.formgroup = this.fb.group({
      first: ['', Validators.required],
      second: ['', Validators.required]
    });
    this.routesub = this.route.paramMap.subscribe(res => {
      this.token = res.get('token')!;
    });
    this.isFetch = this.store.select(getResetIsFetch);
    this.isFetchSuccess = this.store.select(getResetIsFetchSuccess);
    this.fetchError = this.store.select(getResetFetchError);
    this.fetchErrorSub = this.store.select(getResetFetchError).subscribe(res => {
      if (res.is) this.formgroup.controls[res.formcontrol].setErrors({ backend: true })
    })
  };
  reset() {
    this.store.dispatch<IDispatch<IResetFetch>>({
      type: RDX_RESET_FETCH,
      payload: {
        first: this.first,
        second: this.second,
        token: this.token
      }
    })
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
    this.fetchErrorSub.unsubscribe();
  }
}
