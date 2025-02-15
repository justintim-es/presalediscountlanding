import { Component, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getUnexpectedIs } from './redux/unexpected/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  
  constructor(
    private store: Store,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.store.select(getUnexpectedIs).subscribe(res => {
      if (res) {
        this.router.navigate(['/unexpected']);
      }
    })
  }
  ngAfterViewInit() {
          this.elementRef.nativeElement.ownerDocument
              .body.style.backgroundColor = '#000000';
      }
}
