import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginQRCode, loginQRIsFetch, loginQRIsFetchSuccess, RDX_LOGIN_QR_FETCH } from 'src/app/redux/login-qr/reducer';

@Component({
  selector: 'app-main-login-qr-code',
  templateUrl: './main-login-qr-code.component.html',
  styleUrls: ['./main-login-qr-code.component.css']
})
export class MainLoginQrCodeComponent {
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  code: Observable<string>;
  constructor(
    private store: Store
  ) {
    this.isFetch = this.store.select(loginQRIsFetch);
    this.isFetchSuccess = this.store.select(loginQRIsFetchSuccess);
    this.code = this.store.select(loginQRCode);
    this.store.dispatch({
      type: RDX_LOGIN_QR_FETCH
    })
  }
}
