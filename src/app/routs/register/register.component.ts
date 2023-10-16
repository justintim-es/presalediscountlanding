import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { enterFromBottom, enterFromLeft, enterFromRight, enterFromTopText } from 'src/app/animations';
import { IDispatch } from 'src/app/redux/interfaces';
import { IRegisterFetch, RDX_REGISTER_FETCH } from 'src/app/redux/register/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    enterFromTopText,
    enterFromLeft,
    enterFromRight,
    enterFromBottom
  ]
})
export class RegisterComponent {
  companyName: string;
  companyNameFormControl: FormControl;
  email: string;
  emailFormControl: FormControl;
  firstPassword: string;
  firstPasswordFormControl: FormControl;
  secondPassword: string;
  secondPasswordFormControl: FormControl;
  constructor(
    private store: Store
  ) {
    this.companyName = '';
    this.companyNameFormControl = new FormControl('', [
      Validators.required
    ]);
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.firstPassword = '';
    this.firstPasswordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.secondPassword = '';
    this.secondPasswordFormControl = new FormControl('', [
      Validators.required
    ])
  }

  register() {
    this.store.dispatch<IDispatch<IRegisterFetch>>({
      type: RDX_REGISTER_FETCH,
      payload: {
        cn: this.companyName,
        em: this.email,
        fpw: this.firstPassword,
        spw: this.secondPassword
      }
    })
  }

}
