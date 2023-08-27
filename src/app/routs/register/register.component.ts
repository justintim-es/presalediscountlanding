import { Component } from '@angular/core';
import { enterFromLeft, enterFromRight, enterFromTopText } from 'src/app/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    enterFromTopText,
    enterFromLeft,
    enterFromRight
  ]
})
export class RegisterComponent {

}
