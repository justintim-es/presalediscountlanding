import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterFromBottom } from 'src/app/animations';
import { RDX_CONFIRM_FETCH } from 'src/app/redux/confirm/actions';
import { getConfirmFetchErrorMessage, getConfirmIsFetch, getConfirmIsFetchError, getConfirmIsFetchSuccess, getConfirmIsRouteLoginTrue } from 'src/app/redux/confirm/selectors';
import { IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  animations: [
    enterFromBottom
  ]
})
export class ConfirmComponent implements OnInit {
  token: string;
  activatedRoute: SubscriptionLike;

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  fetchErrorMessage: Observable<string>;
  isRouteLogin: SubscriptionLike;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.token = '';
    this.activatedRoute = this.route.paramMap.subscribe(res => {
      this.token = res.get('token')!;
    })
    this.isFetch = this.store.select(getConfirmIsFetch);
    this.isFetchSuccess = this.store.select(getConfirmIsFetchSuccess);
    this.isFetchError = this.store.select(getConfirmIsFetchError);
    this.fetchErrorMessage = this.store.select(getConfirmFetchErrorMessage);
    this.isRouteLogin = this.store.select(getConfirmIsRouteLoginTrue).subscribe(res => {
      if (res) {
        this.router.navigate(['/login-dashboard']);
      }
    })
  }
  ngOnInit() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_CONFIRM_FETCH,
      payload: this.token
    })
  }

}
