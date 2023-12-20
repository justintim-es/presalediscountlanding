import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LandingComponent } from './routs/landing/landing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { landingReducer } from './redux/landing/reducer';
import { LandingService } from './redux/landing/landing.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './routs/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './redux/register/register.service';
import { registerReducer } from './redux/register/reducer';
import { PleaseComponent } from './routs/please/please.component';
import { unexpectedReducer } from './redux/unexpected/reducer';
import { UnexpectedComponent } from './routs/unexpected/unexpected.component';
import { UnexpectedService } from './redux/unexpected/unexpected.service';
import { confirmReducer } from './redux/confirm/reducer';
import { ConfirmService } from './redux/confirm/confirm.service';
import { ConfirmComponent } from './routs/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    PleaseComponent,
    UnexpectedComponent,
    ConfirmComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      unexpectedReducer: unexpectedReducer,
      landingReducer: landingReducer,
      registerReducer: registerReducer,
      confirmReducer: confirmReducer
    }, {}),
    EffectsModule.forRoot([
      LandingService,
      UnexpectedService,
      RegisterService,
      ConfirmService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
