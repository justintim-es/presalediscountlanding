import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { enterFromLeft, enterFromRight } from 'src/app/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [
    enterFromLeft,
    enterFromRight
  ]
})
export class DemoComponent implements OnDestroy {
  routesub: SubscriptionLike
  value: number;
  discount: number;
  constructor(
    private route: ActivatedRoute
  ) {
    this.value = 0;
    this.discount = 0;
    this.routesub = this.route.paramMap.subscribe(res => {
      this.value = parseInt(res.get('value')!);
      this.discount = parseInt(res.get('discount')!);
    })
    window.scroll({
      top: 0
    })
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
  }
}
