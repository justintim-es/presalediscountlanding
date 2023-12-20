import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDispatch } from 'src/app/redux/interfaces';
import { RDX_UNEXPECTED_FETCH } from 'src/app/redux/unexpected/actions';
import { getUnexpectedIsFetch, getUnexpectedIsFetchError, getUnexpectedIsFetchSuccess } from 'src/app/redux/unexpected/selectors';

@Component({
  selector: 'app-unexpected',
  templateUrl: './unexpected.component.html',
  styleUrls: ['./unexpected.component.css']
})
export class UnexpectedComponent {
  explanation: string;
  explanationFormControl: FormControl;

  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  isFetchError: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.explanation = '';
    this.explanationFormControl = new FormControl('', [
      Validators.required
    ]);
    this.isFetch = this.store.select(getUnexpectedIsFetch);
    this.isFetchSuccess = this.store.select(getUnexpectedIsFetchSuccess);
    this.isFetchError = this.store.select(getUnexpectedIsFetchError);
  }

  fetch() {
    this.store.dispatch<IDispatch<string>>({
      type: RDX_UNEXPECTED_FETCH,
      payload: this.explanation
    })
  }


}
