import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getUnexpectedIs } from './redux/unexpected/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private store: Store,
    private router: Router
  ) {
    this.store.select(getUnexpectedIs).subscribe(res => {
      if (res) {
        this.router.navigate(['/unexpected']);
      }
    })
  }
}
