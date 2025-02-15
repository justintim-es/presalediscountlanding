import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-flyer',
  templateUrl: './flyer.component.html',
  styleUrls: ['./flyer.component.css']
})
export class FlyerComponent {
  routesub: SubscriptionLike;
  id: number;
  constructor(
    private route: ActivatedRoute
  ) {
    this.id = 0;
    this.routesub = this.route.paramMap.subscribe(res => {
      this.id = parseInt(res.get('shop')!)
    })
  }
}
