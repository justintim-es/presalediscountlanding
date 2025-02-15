import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getForgotIsFetch, getForgotIsFetchSuccess, RDX_FORGOT_FETCH } from 'src/app/redux/forgot/reducer';
import { IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  email: string;
  emailformcontrol: FormControl

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.email = '';
    this.emailformcontrol = new FormControl('', [
      Validators.required
    ]);
    this.isFetch = this.store.select(getForgotIsFetch);
    this.isFetchSuccess = this.store.select(getForgotIsFetchSuccess);
  }
  reset() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_FORGOT_FETCH,
      payload: this.email
    })
  }
}
