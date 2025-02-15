import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { enterFromLeft, enterFromRight } from 'src/app/animations';
import { getdemoisfetch, getdemoisfetchsuccess, getdemourl, rdxdemofetch } from 'src/app/redux/demo/reducer';
import { IDispatch } from 'src/app/redux/interfaces';

@Component({
  selector: 'app-demo-buy',
  templateUrl: './demo-buy.component.html',
  styleUrls: ['./demo-buy.component.css'],
  animations: [
    enterFromLeft,
    enterFromRight
  ]
})
export class DemoBuyComponent {
  routesub: SubscriptionLike
  value: number;
  discount: number;
  isproceed: boolean;
  emailformcontrol: FormControl;
  cemailformcontrol: FormControl;
  email!: string;
  cemail!: string;

  isfetch: Observable<boolean>;
  isfetchsuccess: SubscriptionLike;
  urlsub: SubscriptionLike;
  url: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
    this.isproceed = false;
    this.value = 0;
    this.discount = 0;
    this.url = '';
    this.routesub = this.route.paramMap.subscribe(res => {
      this.value = parseInt(res.get('value')!);
      this.discount = parseInt(res.get('discount')!);
    });
    this.emailformcontrol = new FormControl('', [Validators.required]);
    this.cemailformcontrol = new FormControl('', [Validators.required]);
    this.isfetch = this.store.select(getdemoisfetch);
    this.urlsub = this.store.select(getdemourl).subscribe(res => this.url = res);
    this.isfetchsuccess = this.store.select(getdemoisfetchsuccess).subscribe(res => {
      if (res) window.location.href = this.url
    })
  }
  proceed() {
    this.emailformcontrol.markAsTouched();
    this.cemailformcontrol.markAsTouched();
    if (!this.emailformcontrol.hasError('required') && !this.cemailformcontrol.hasError('required') && this.cemail == this.email) this.store.dispatch<IDispatch<number>>({ type: rdxdemofetch, payload: (this.value - this.discount) }); 
    if (this.cemail != this.email) {
      this.emailformcontrol.setErrors({ different: true })
      this.cemailformcontrol.setErrors({ different: true })
    }
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
  }
}
